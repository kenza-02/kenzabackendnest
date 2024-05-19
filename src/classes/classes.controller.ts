import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { Classe } from './schemas/classe.schema';


@Controller('classes')
export class ClassesController {
  constructor(private readonly classeService: ClassesService) {}
 
  @Get() 
  async findAll(): Promise<Classe[]> {
    return await this.classeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Classe> {
    return await this.classeService.findOne(id);
  }

  @Post()
  async create(@Body() post: Classe): Promise<Classe> {
    return await this.classeService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: Classe): Promise<Classe> {
    return await this.classeService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Classe> {
    return await this.classeService.delete(id);
  }
}
