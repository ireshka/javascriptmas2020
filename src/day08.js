/**
 * Day 08 -
 * ---
 * DESCRIPTION:
 * In this challenge a casino has asked you to make an online dice that works
 * just like it would in real life. Using the pre-made dice face that represents
 * ‘one’, make the faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’.
 * Now when the users clicks the dice on the screen the dice is expected to
 * show one of the faces randomly.
 * ---
 * Hints: event listeners, Math.random()
 * ---
 */

const addDot = (element) => {
  element.classList.add('dot');
};

const rollDice = () => {
  const result = document.querySelector('.result');

  const dotPattern = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1],
  ];

  const randomDot = Math.floor(Math.random() * 5);
  const randomDotPattern = dotPattern[randomDot];
  const randomNumber = randomDot + 1;
  result.textContent = randomNumber;

  const dots = [...document.querySelectorAll('.dice div')];
  dots.forEach((dot) => dot.classList.remove('dot'));

  dots.forEach((dot, index) => {
    const isDot = randomDotPattern[index];
    if (isDot) {
      addDot(dot);
    }
  });
};

const dice = document.querySelector('.dice');

dice.addEventListener('click', rollDice);
