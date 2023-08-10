import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.server';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
