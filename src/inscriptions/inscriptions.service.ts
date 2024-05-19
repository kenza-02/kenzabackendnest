import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inscription } from './entities/inscription.entity';
import { Model } from 'mongoose';

@Injectable()
export class InscriptionsService {
  constructor(@InjectModel(Inscription.name) private readonly inscriptionModel: Model<Inscription>) {}

  async findAll(): Promise<Inscription[]> {
    return await this.inscriptionModel.find().populate('classe').exec();
  }

  async findOne(id: string): Promise<Inscription> {
    return await this.inscriptionModel.findById(id).populate('classe').exec();
  }

  async create(inscription: Inscription): Promise<Inscription> {
    const newInscription = new this.inscriptionModel(inscription);
    const mydata= newInscription.save();
    return (await mydata).populate('classe');
    // return await newInscription.save();
  
  }

  async update(id: string, inscription: Inscription): Promise<Inscription> {
    return await this.inscriptionModel.findByIdAndUpdate(id, inscription, { new: true }).populate('classe');
  }

  async delete(id: string): Promise<Inscription> {
    return await this.inscriptionModel.findByIdAndDelete(id);
  }
}
