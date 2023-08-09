import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsuariosModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
