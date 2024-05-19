import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classe, ClasseSchema } from './schemas/classe.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Classe.name, schema: ClasseSchema }])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
