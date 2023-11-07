//symbole declaration
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 734682938628n

//array

const heros = ["spidy", "hulk","capt"]

//object
let myObj = 
{name:"uttam",
age:22,
}

//fuction

const myFucntion = function(){
    console.log("demo")
}


//=========================================================

//Stack memnor

let myhomeName = "juniIndore"
let anotherName = myhomeName
anotherName = "punehome"

let userOne = {
    email:"userone@yahoo.com",
    name:"one"
}

let userTwo = userOne

console.log(userTwo)

//now if we chnage the value through userTwo

userTwo.email = "userone@google.com"
console.log("after");
console.log(userOne)
console.log(userTwo)