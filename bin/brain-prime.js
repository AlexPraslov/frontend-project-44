import { runGame, randomInt } from '../src/index.js';

const prime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
    
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0)
                return false;
            i += 6;
        }
    
        return true;
};

const primeGameLogic = () => {
    const randomNumber = randomInt(1, 100);
    const correctAnswer = prime(randomNumber) ? "yes" : "no";
    return {
      question: `${randomNumber}`,
      expectedAnswer: correctAnswer,
    };
};

runGame(primeGameLogic, 'Answer "yes" if given number is prime. Otherwise answer "no".')