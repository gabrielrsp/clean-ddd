import { AnswerQuestionUseCase } from './answer-question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeAnswersRepository: QuestionsRepository = {
  create: async () => {},
}

test('create an answer', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeAnswersRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
