/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorators/get-user.decorators';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import { EditUserDto } from 'src/auth/model/edit.model';
@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}
  //   get user info
  @Get('info')
  getMe(@GetUser() user: User) {
    return user;
  }

  //   edit user info
  @Put('edit')
  editMe(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    this._userService.edit(userId, dto);
  }

  // logout
}
