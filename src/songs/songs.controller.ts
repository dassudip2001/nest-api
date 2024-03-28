/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('api/v1/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {
    console.log('Songs Controller Created');
  }
  @Post()
  create() {
    return this.songsService.create('arijit singh');
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
