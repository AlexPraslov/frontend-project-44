#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { evenGameLogic } from '../src/games/even-logic.js'

runGame(
  evenGameLogic,
  'Answer "yes" if the number is even, otherwise answer "no".',
)
