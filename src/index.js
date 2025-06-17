import readlineSync from 'readline-sync';

// Генерация случайного целого числа
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Обобщённая функция для запуска игр
const runGame = (gameLogic, gameDescription) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  console.log(gameDescription);
  
  let correctAnswersCount = 0;
  const requiredCorrectAnswers = 3;

  while (correctAnswersCount < requiredCorrectAnswers) {
    const { question, expectedAnswer } = gameLogic(); // данные конкретной игры
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

    const processedUserAnswer = typeof expectedAnswer === 'number' ? parseFloat(userAnswer) : userAnswer;
    
    if (processedUserAnswer === expectedAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
    
   console.log(`Congratulations, ${userName}!`);
  
};

export {randomInt, runGame};