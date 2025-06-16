import readlineSync from 'readline-sync';

// Генерация рандомного числа
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция проверки числа
const isEven = (num) => num % 2 === 0;

function evenGame()  {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const requaredCorrectAnswers = 3;

  while (correctAnswersCount < requaredCorrectAnswers) {
    const randomNum = randomInt(1, 100); // Генерация рандомного числа
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

    const correctAnswer = isEven(randomNum) ? "yes" : "no";

    if (userAnswer == correctAnswer) {
      // Логика игры
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

evenGame();
