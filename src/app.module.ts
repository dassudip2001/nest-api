/* eslint-disable prettier/prettier */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middlewire/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('api/v1/songs');
    // only specific route
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'api/v1/songs', method: RequestMethod.GET });

    // used in controller
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
