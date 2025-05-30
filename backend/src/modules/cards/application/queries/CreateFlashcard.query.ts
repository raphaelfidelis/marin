import { Inject } from '@nestjs/common';
import { FlashcardDTO, FlashcardProps } from '../../domain/dto/flashcard.dto';
import { FlashcardRepository } from '../../domain/repositories/flashcard.repository';

export class CreateFlashcardQuery {
  constructor(
    @Inject('FlashcardRepository')
    private readonly flashcardRepository: FlashcardRepository,
  ) {}

  async execute(flashcard: FlashcardProps): Promise<boolean> {
    const flashcardDTO = new FlashcardDTO(flashcard);
    return await this.flashcardRepository.create(flashcardDTO);
  }
}
