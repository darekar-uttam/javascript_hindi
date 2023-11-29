# Project related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-uxpwbd?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## Project 1

```Javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((singleBtn) => {
  console.log(singleBtn);
  singleBtn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


## Project 2

```Javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3

```JavaScript
const clock = document.getElementById('clock');
// const clock = document.querySelector("#clock")

// console.log(date.toLocaleTimeString())

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4

```Javascript
let randomNumber = parseInt(Math.random() * 10 + 1);

console.log(randomNumber);
const guessSubmit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  guessSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  console.log(typeof guess);
  if (isNaN(guess)) {
    //alert('Please enter a valid number');
    console.log('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Correct Guess, You win');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOO high');
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project - 4

```Javascript
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = "#"
    for(let i = 0; i <6; i++){
        color += hex[Math.floor(Math.random() * 10)]
    }
    return color;
}

let intervalId

function startChangeColor(){
    if(!intervalId){
        intervalId = setInterval(changeBackgroundColor,1000)
    }

    function changeBackgroundColor(){
        document.body.style.backgroundColor = randomColor()
    }
}


function stopChangeColor(){
    clearInterval(intervalId)
    intervalId = null
}


document.querySelector("#start").addEventListener("click", startChangeColor)
document.querySelector("#stop").addEventListener("click", stopChangeColor)


```