#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { arithProgressionGameLogic } from '../src/games/progression-logic.js'

runGame(
  arithProgressionGameLogic,
  'What number is missing in the progression?',
)
