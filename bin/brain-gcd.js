#!/usr/bin/env node
import { runGame, randomInt } from '../src/index.js'

// Поиск НОД
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return Math.abs(a)
}

// Логика игры поска НОД
const gcdGameLogic = () => {
  const number1 = randomInt(0, 100)
  const number2 = randomInt(0, 100)
  const correctAnswer = gcd(number1, number2)
  return {
    question: `${number1} ${number2}`,
    expectedAnswer: correctAnswer,
  }
}

runGame(gcdGameLogic, 'Find the greatest common divisor of given numbers.')
