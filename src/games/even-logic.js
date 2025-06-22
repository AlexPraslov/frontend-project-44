import { randomInt } from '../random-int.js'

// Проверка чётности числа
const isEven = num => num % 2 === 0

// Логика игры с проверкой чётности
const evenGameLogic = () => {
  const randomNumber = randomInt(1, 100)
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  return {
    question: `${randomNumber}`,
    expectedAnswer: correctAnswer,
  }
}

export { evenGameLogic }
