// Repositories Interfaces sets the definition (not the implementation) on persisting data

import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>
}
