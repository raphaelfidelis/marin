import { FlashcardDTO, FlashcardProps } from '../dto/flashcard.dto';

export interface FlashcardRepository {
  get(filter?: Partial<FlashcardProps>): Promise<FlashcardDTO[]>;
  create(flashcard: FlashcardDTO): Promise<boolean>;
}
