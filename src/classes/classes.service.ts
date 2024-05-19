import { Injectable } from '@nestjs/common';
import { Classe } from './schemas/classe.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClassesService {
  constructor(@InjectModel(Classe.name) private readonly classeModel: Model<Classe>) {}

  async findAll(): Promise<Classe[]> {
    return await this.classeModel.find().exec();
  }

  async findOne(id: string): Promise<Classe> {
    return await this.classeModel.findById(id).exec();
  }

  async create(classe: Classe): Promise<Classe> {
    const newClasse = new this.classeModel(classe);
    return await newClasse.save();
  }

  async update(id: string, classe: Classe): Promise<Classe> {
    return await this.classeModel.findByIdAndUpdate(id, classe, { new: true });
  }

  async delete(id: string): Promise<Classe> {
    return await this.classeModel.findByIdAndDelete(id);
  }
}
