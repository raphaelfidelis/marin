import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FlashcardDTO, FlashcardProps } from '../../domain/dto/flashcard.dto';
import { FlashcardRepository } from '../../domain/repositories/flashcard.repository';
import { Flashcard, FlashcardDocument } from '../models/flashcard.schema';

@Injectable()
export class FlashcardRepositoryImpl implements FlashcardRepository {
  constructor(
    @InjectModel(Flashcard.name)
    private flashcardModel: Model<FlashcardDocument>,
  ) {}

  async get(filter?: Partial<FlashcardProps>): Promise<FlashcardDTO[]> {
    const flashcards = await this.flashcardModel.find(filter ?? {}).exec();
    return flashcards.map((doc) => new FlashcardDTO(doc.toObject()));
  }

  async create(flashcard: FlashcardDTO): Promise<boolean> {
    const flashcardDoc = new this.flashcardModel({
      hsk: flashcard.getHsk(),
      pinyin: flashcard.getPinyin(),
      translation: flashcard.getTranslation(),
      category: flashcard.getCategory(),
      chinese: flashcard.getChinese(),
    });

    try {
      const result = await flashcardDoc.save();
      return !!result;
    } catch (error) {
      console.error('Error creating flashcard: ', error);
      return false;
    }
  }
}
