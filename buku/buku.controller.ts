// buku/buku.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
// import { BukuService } from './buku.service';
import { Buku } from '@prisma/client';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';
import { BukuService } from './buku.service';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/api/buku')
export class BukuController {
  constructor(private readonly bukuService: BukuService) {}

  @Get()
  async findAll(): Promise<Buku[]> {
    return this.bukuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Buku | null> {
    return this.bukuService.findOne(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: Omit<Buku, 'id'>): Promise<Buku> {
    return this.bukuService.create(data);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Buku>,
  ): Promise<Buku> {
    return this.bukuService.update(Number(id), data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string): Promise<Buku> {
    return this.bukuService.delete(Number(id));
  }
}
