//creation of promise

const promiseOne = new Promise(function(resolve, reject){
    
    //do an async task
    //db calls
    //cryptography
    //network call
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise comsumed");
})

//second way

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async two resolved");
})