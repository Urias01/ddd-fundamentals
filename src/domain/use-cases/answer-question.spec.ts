import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'


const fakeAnswersRepository: AnswerRepository = {
  create: async (answer) => {
    return;
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Nova Resposta"
  })

  expect(answer.content).toEqual("Nova Resposta")
})