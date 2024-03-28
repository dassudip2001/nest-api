/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDto } from './dto/create-songs-dto';

@Controller('api/v1/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {
    console.log('Songs Controller Created');
  }
  @Post()
  //   add a create song validation
  create(@Body() createSong: CreateSongsDto) {
    return this.songsService.create(createSong);
  }
  @Get()
  getAllSongs() {
    try {
      return this.songsService.getAllSongs();
    } catch (e) {
      throw new HttpException('fetch error', HttpStatus.BAD_REQUEST, {
        cause: e.message,
      });
    }
  }

  @Get('id')
  getOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `All songs ${typeof id}`;
  }

  @Put('id')
  updateOne(): string {
    return 'All songs';
  }

  @Delete('id')
  deleteOne(): string {
    return 'All songs';
  }
}
