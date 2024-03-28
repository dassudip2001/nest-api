/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

/* `@Injectable()` is a decorator in NestJS that marks a class as a provider which can be injected into
other classes. This decorator allows the class to be managed by the NestJS dependency injection
container, making it available for dependency injection throughout the application. */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
