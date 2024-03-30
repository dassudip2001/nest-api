/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EditUserDto } from 'src/auth/model/edit.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private _prisma: PrismaService) {}

  // edit user
  async edit(userId: number, dto: EditUserDto) {
    const user = await this._prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    return user;
  }
}
