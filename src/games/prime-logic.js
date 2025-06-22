import { randomInt } from '../random-int.js'

// Поиск предиката
const prime = (num) => {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false

  let i = 5
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false
    i += 6
  }

  return true
}

// Логика игры с поиском предиката
const primeGameLogic = () => {
  const randomNumber = randomInt(1, 100)
  const correctAnswer = prime(randomNumber) ? 'yes' : 'no'
  return {
    question: `${randomNumber}`,
    expectedAnswer: correctAnswer,
  }
}

export { primeGameLogic }
