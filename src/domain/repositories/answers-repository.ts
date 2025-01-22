// Repositories Interfaces sets the definition (not the implementation) on persisting data

import { Answer } from '../entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
