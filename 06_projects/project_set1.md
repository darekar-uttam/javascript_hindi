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