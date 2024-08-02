import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from 'auth/auth.module';
import { BukuModule } from '../buku/buku.module';
// import { PrismaModule } from './prisma/prisma.module';
// import { BukuModule } from './buku/buku.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BukuModule, AuthModule],
})
export class AppModule {}
