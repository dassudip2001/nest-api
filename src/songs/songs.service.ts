/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private songs = [];

  // create a song
  create(song) {
    this.songs.push(song);
    return song;
  }

  // get all songs
  getAllSongs() {
    // fetch error using exception
    throw new Error('fetch error');
    return this.songs;
  }

  // get one song
  getOne(id: number) {
    return this.songs[id];
  }

  // update one song
  update(id: number, song) {
    this.songs[id] = song;
  }

  // delete one song
  delete(id: number) {
    this.songs.splice(id, 1);
  }
}
