import { randomInt } from "../random-int.js"

// Генерация прогрессии
const arithProgressionGameLogic = () => {
  // Генерация данных для прогрессии
  const firstElement = 1
  const step = randomInt(2, 4) // Шаг
  const length = randomInt(5, 10) // Длина прогрессии
  const hiddenIndex = randomInt(0, length - 1) // Индекс скрытого элемента

  // Формирование прогрессии
  let progression = []
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..') // Маскировка элемента
    }
    else {
      progression.push(firstElement + i * step) // Стандартное заполнение прогресии
    }
  }

  return {
    question: progression.join(' '),
    expectedAnswer: firstElement + hiddenIndex * step, // Правильный ответ
  }
}

export { arithProgressionGameLogic }
