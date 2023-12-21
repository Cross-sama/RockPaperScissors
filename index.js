import readlineSync from 'readline-sync';

console.log('Welcome to the game "Rock, Paper, Scissors!"');

const RockPaperScissors = () => {
  console.log('Choose your option:');

  // eslint-disable-next-line no-sparse-arrays
  const options = [, 'Rock', 'Paper', 'Scissors'];
  const playerOption = readlineSync.keyInSelect(options, 'What is your choice?', { cancel: false });

  console.log(`You picked: ${options[playerOption]}`);

  const computerOption = Math.floor((Math.random() * 3) + 1);
  console.log(`Computer picked: ${options[computerOption]}`);

  let drawOrWinOrLose = '';
  if (playerOption === computerOption) {
    drawOrWinOrLose = 'Draw! You and computer picked same options!';
  } else if (playerOption === 1 && computerOption === 2) {
    drawOrWinOrLose = `You lose! ${options[computerOption]} beats ${options[playerOption]}`;
  } else if (playerOption === 1 && computerOption === 3) {
    drawOrWinOrLose = `You win! ${options[playerOption]} beats ${options[computerOption]}`;
  } else if (playerOption === 2 && computerOption === 3) {
    drawOrWinOrLose = `You lose! ${options[computerOption]} beats ${options[playerOption]}`;
  } else if (playerOption === 2 && computerOption === 1) {
    drawOrWinOrLose = `You win! ${options[playerOption]} beats ${options[computerOption]}`;
  } else if (playerOption === 3 && computerOption === 1) {
    drawOrWinOrLose = `You lose! ${options[computerOption]} beats ${options[playerOption]}`;
  } else if (playerOption === 3 && computerOption === 2) {
    drawOrWinOrLose = `You win! ${options[playerOption]} beats ${options[computerOption]}`;
  }

  console.log(`Result: ${drawOrWinOrLose}`);

  const nextMatchQuestion = readlineSync.question('Want to try again? (y/n): ');
  if (nextMatchQuestion === 'y' || nextMatchQuestion.toLowerCase() === 'y') {
    RockPaperScissors();
  } else {
    console.log('See you next time!');
  }
};
RockPaperScissors();
