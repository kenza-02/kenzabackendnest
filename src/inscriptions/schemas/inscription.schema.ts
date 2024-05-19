import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Classe } from 'src/classes/schemas/classe.schema';

@Schema({
    timestamps: true 
})
export class Inscription {
  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  genre: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Classe' })
  classe: Classe;

  @Prop()
  date_naiss: string;
}

export const InscriptionSchema = SchemaFactory.createForClass(Inscription);