const name = "uatam"
const repoCount = 2

//new stack of concentination - its known as string  interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("God-of-war")
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.indexOf('w'));
const newString = gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-8,1)
console.log(anotherString)

const newStringOne ="    uttam      "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://uttam.com/spidy%20ironman"

console.log(url.replace('%20','-'))

console.log(url.includes('iron'))

console.log(gameName.split('-'));