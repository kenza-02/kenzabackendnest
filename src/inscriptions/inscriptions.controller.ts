import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';
import { Inscription } from './entities/inscription.entity';

@Controller('inscriptions')
export class InscriptionsController {
  constructor(private readonly inscriptionsService: InscriptionsService) {}
  @Get() 
  async findAll(): Promise<Inscription[]> {
    return await this.inscriptionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inscription> {
    return await this.inscriptionsService.findOne(id);
  }

  @Post()
  async create(@Body() post: Inscription): Promise<Inscription> {
    return await this.inscriptionsService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: Inscription): Promise<Inscription> {
    return await this.inscriptionsService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Inscription> {
    return await this.inscriptionsService.delete(id);
  }
}
