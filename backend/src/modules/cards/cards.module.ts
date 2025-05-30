import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Flashcard, FlashcardSchema } from './infra/models/flashcard.schema';
import { FlashcardRepositoryImpl } from './infra/repositories/flashcard.repository';
import { GetFlashcardsQuery } from './application/queries/GetFlashcards.query';
import { CreateFlashcardQuery } from './application/queries/CreateFlashcard.query';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Flashcard.name,
        schema: FlashcardSchema,
      },
    ]),
  ],
  controllers: [CardsController],
  providers: [
    {
      provide: 'FlashcardRepository',
      useClass: FlashcardRepositoryImpl,
    },
    CreateFlashcardQuery,
    GetFlashcardsQuery,
  ],
})
export class CardsModule {}
