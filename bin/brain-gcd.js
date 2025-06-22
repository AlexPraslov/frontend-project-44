#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { gcdGameLogic } from '../src/games/gcd-logic.js'

runGame(gcdGameLogic, 'Find the greatest common divisor of given numbers.')
