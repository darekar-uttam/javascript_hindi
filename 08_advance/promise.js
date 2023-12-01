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


//third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Uttam", email: "uttam@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//fourth promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "admin", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log();
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("Promise is resolve and rejected"))


//promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try {
        const response  = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromiseFive()


const rquestUrl  = "https://api.github.com/users/darekar-uttam"

// async function getUserDetail(){
//     try {        
//     const response = await fetch("https://api.github.com/users/darekar-uttam")
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);        
//     }
// }
// getUserDetail()

fetch('https://api.github.com/users/darekar-uttam')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))