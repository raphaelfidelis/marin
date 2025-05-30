import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FlashcardProps } from './domain/dto/flashcard.dto';
import { CreateFlashcardQuery } from './application/queries/CreateFlashcard.query';
import {
  GetFlashcardsQuery,
  GetFlashcardsQueryProps,
} from './application/queries/GetFlashcards.query';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly createFlashcardQuery: CreateFlashcardQuery,
    private readonly getFlashcardsQuery: GetFlashcardsQuery,
  ) {}

  @Post()
  async create(@Body() cardData: FlashcardProps) {
    const result = await this.createFlashcardQuery.execute(cardData);
    return { created: result, data: cardData };
  }

  @Get()
  async getFlashcards(@Query() query: GetFlashcardsQueryProps) {
    const result = await this.getFlashcardsQuery.execute(query);
    return result;
  }
}
