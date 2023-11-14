//filters

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter( (num) => {
//     return num > 5
// })

const newNums = []
myNums.forEach( (num) => {
    if(num >5){
        newNums.push(num)
    }
})

console.log(newNums);

