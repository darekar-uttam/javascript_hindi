const user = {
    username: "uttam",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// console.log(this);

// function demo(){
//     console.log(this);
// }

// demo()

const demo = () => {
    let username = "uttam"
    console.log(username);
}