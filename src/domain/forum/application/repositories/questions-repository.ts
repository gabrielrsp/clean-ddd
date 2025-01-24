// Repositories Interfaces sets the definition (not the implementation) on persisting data

import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  create(question: Question): Promise<void>
}
