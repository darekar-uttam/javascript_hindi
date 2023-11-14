//reduce functionality

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, curVal) {
//     console.log(`acc value ${acc} and curval is ${curVal}`);
//     return acc + curVal
// }, 0)

// const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 8999
    },
    {
        itemName: 'mobile course',
        price: 7999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) =>  acc + item.price, 0)

console.log(totalPrice);