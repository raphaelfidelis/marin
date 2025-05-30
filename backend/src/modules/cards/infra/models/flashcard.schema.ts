import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlashcardDocument = Flashcard & Document;

@Schema()
export class Flashcard {
  @Prop({ required: true })
  chinese: string;

  @Prop()
  pinyin: string;

  @Prop()
  translation: string;

  @Prop()
  hsk: number;

  @Prop()
  category: string;
}

export const FlashcardSchema = SchemaFactory.createForClass(Flashcard);
