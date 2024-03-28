/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
    return this.songsService.getAllSongs();
  }

  @Get('id')
  getOne(): string {
    return 'All songs';
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
