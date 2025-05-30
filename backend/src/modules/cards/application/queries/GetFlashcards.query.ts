import { Inject } from '@nestjs/common';
import { FlashcardDTO, FlashcardProps } from '../../domain/dto/flashcard.dto';
import { FlashcardRepository } from '../../domain/repositories/flashcard.repository';

export interface GetFlashcardsQueryProps {
  hsk?: number;
  category?: string;
  chinese?: string;
}

export class GetFlashcardsQuery {
  constructor(
    @Inject('FlashcardRepository')
    private readonly flashcardRepository: FlashcardRepository,
  ) {}

  async execute(props: GetFlashcardsQueryProps): Promise<FlashcardDTO[]> {
    return await this.flashcardRepository.get(props);
  }
}
