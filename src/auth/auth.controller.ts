/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Post('register')
  register(@Body() dto: AuthModel) {
    console.log(dto);

    return this.authService.register();
  }
}
