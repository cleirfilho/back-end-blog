import { usuarios } from '@prisma/client';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePostDto {
  @IsBoolean()
  published;
  @IsString()
  titulo: string;
  @IsString()
  subtitulo: string;
  @IsString()
  loca_publicacao: string;
  @IsString()
  texto: string;
  @IsInt()
  autorId: string;
  @IsInt()
  usuarios: usuarios;
}
