/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModel } from './model';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private _jwt: JwtService,
    private _config: ConfigService,
  ) {}
  async login(dto: AuthModel) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    const passwordMatch = await argon.verify(user.password, dto.password);
    if (!passwordMatch) {
      throw new ForbiddenException('Invalid credentials');
    }
    const valid = await argon.verify(user.password, dto.password);
    if (!valid) {
      throw new ForbiddenException('Invalid credentials');
    }
    // return user;
    return this.signToken(user.id, user.email);
  }

  async register(dto: AuthModel) {
    // generate the password hash
    const password = await argon.hash(dto.password);
    // save the new user in the db
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          password,
          name: dto.name,
        },
      });

      // return user;
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  //

  // sign token
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this._config.get('JWT');

    const token = await this._jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
