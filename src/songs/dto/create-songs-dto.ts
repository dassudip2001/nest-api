/* eslint-disable prettier/prettier */
import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongsDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  @IsArray()
  readonly artist: string[];
  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;
  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
