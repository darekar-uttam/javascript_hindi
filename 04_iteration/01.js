//for loop

// for (let index = 0; index < 10; index++) {
//    const element = i
//    if(element ==5){
//     console.log("5 is the best number");
//    }
//    console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loopL ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`inner loopL ${j}, outer loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }


//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         continue
//     }
//     console.log(`value of i is ${index}`);
    
// }

//for of loop

// const arr = [1,3,4,5]

// for (const val of arr) {
//     console.log(val);
    
// }


// const str = "morning"
// for (const val of str) {
//     console.log(val);
// }


//Maps


const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
}


 const myObject = {
    "game1" : "NFS",
    "game2": "GOW"
 }

 for (const [key, value] of myObject) {
    console.log(key, ':-', value);
 }