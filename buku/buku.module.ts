// buku/buku.module.ts
import { Module } from '@nestjs/common';
import { BukuController } from './buku.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BukuService } from './buku.service';
// import { BukuService } from './buku.service';
// import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BukuController],
  providers: [BukuService],
})
export class BukuModule {}
