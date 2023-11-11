console.log("functionsss");

// function sayMyName(){
//     console.log("uttam");
// }

// sayMyName()
function loginUserMessage (username){
    return `${username} just logged in`
}

console.log(loginUserMessage("uttam"));

//using od REST operator - the (...) is called as REST and Spread operator
function calculateCartPrice(...num1){
    return num1
}

 
console.log(calculateCartPrice(200,454,333));


const user = {
    username:"uttam",
    price:888
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)


const myArray = [333,787,123,544]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));

