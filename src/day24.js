// Comments come from original task

//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
let pushed = false; //Has the stop button been pushed - false is default
let targetInt; //The target number to stop the wheel on
const spinningElement = document.querySelector('#spinning'); //The spinning number
const buttonStop = document.querySelector('#buttonPressed');
const buttonReplay = document.querySelector('#buttonReplay');

//event listener
buttonStop.addEventListener('click', buttonPressed);
buttonReplay.addEventListener('click', replay);

//When the stop button is pushed
function buttonPressed() {
  pushed = true;
}

//set the target Int
function setTargetInt() {
  const targetElement = document.querySelector('#targetNum');
  targetInt = Math.floor(Math.random() * 101);
  targetElement.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//EDIT THIS FUNCTION
const spin = async () => {
  //WRITE YOUR CODE HERE
  for (let iter = 1; iter <= 100; iter++) {
    if (pushed) {
      return stop(iter); //Trigger this function when the STOP button has been pushed
      // break;
    } else {
      spinningElement.textContent = iter;
      await sleep(100); //Paste this wherever you need to sleep the incrimentor
    }
  }
  return stop(1000);
};

//EDIT THIS FUNCTION
function stop(value) {
  //WRITE YOUR CODE HERE
  const result = document.querySelector('#result'); //display your result message here
  let message;

  if (value === 1000) {
    message = 'You did not even give it a try';
  } else {
    const difference = Math.abs(targetInt - (value - 1));
    difference === 0
      ? (message = 'You did it!')
      : (message = `You missed by ${difference}`);
  }

  buttonStop.setAttribute('disabled', true);
  buttonReplay.removeAttribute('disabled');

  result.textContent = message;
}

function replay() {
  buttonStop.removeAttribute('disabled');
  buttonReplay.setAttribute('disabled', true);
  pushed = false;
  setTargetInt();
  spin();
}

//main
setTargetInt();
spin();
