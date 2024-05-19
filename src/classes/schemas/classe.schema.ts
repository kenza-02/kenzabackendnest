import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Classe {
  @Prop()
  libelle: string;
}

export const ClasseSchema = SchemaFactory.createForClass(Classe);