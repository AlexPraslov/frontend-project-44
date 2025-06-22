#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { primeGameLogic } from '../src/prime-logic.js'

runGame(
  primeGameLogic,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
)
