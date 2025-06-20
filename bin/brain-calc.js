#!/usr/bin/env node
import { randomInt, runGame } from "../src/index.js";

// Выбор случайной арифметической операции
const operations = ['+', '-', '*'];
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];

// Вычисление выражения
const calculateExpression = (a, b, op) => {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error("Unknown operation");
  }
};

// Логика игры
const calcGameLogic = () => {
    const firstOperand = randomInt(1, 50);
    const secondOperand = randomInt(1, 50);
    const operation = randomOperation();
    const correctResult = calculateExpression(firstOperand, secondOperand, operation);
    return {
      question: `${firstOperand} ${operation} ${secondOperand}`,
      expectedAnswer: correctResult,
    };
  };

runGame(calcGameLogic, 'What is the result of the expression?');
