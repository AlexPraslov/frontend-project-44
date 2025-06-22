#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { calcGameLogic } from '../src/calc-logic.js'

runGame(calcGameLogic, 'What is the result of the expression?')
