// buku/buku.service.ts
import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
import { Buku } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BukuService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Buku[]> {
    return this.prisma.buku.findMany();
  }

  async findOne(id: number): Promise<Buku | null> {
    return this.prisma.buku.findUnique({ where: { id } });
  }

  async create(data: Omit<Buku, 'id'>): Promise<Buku> {
    return this.prisma.buku.create({ data });
  }

  async update(id: number, data: Partial<Buku>): Promise<Buku> {
    return this.prisma.buku.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Buku> {
    return this.prisma.buku.delete({ where: { id } });
  }
}
