const arr2 = new Array(1,2,3,4)
// console.log(arr2);

//array methods

arr2.push(7)
// console.log(arr2);

arr2.pop()
// console.log(arr2);

arr2.unshift(9)
// console.log(arr2);

arr2.shift()
// console.log(arr2);


// console.log(arr2.includes(8));

// console.log(arr2.indexOf(19));



//slice and splice
// console.log("A", arr2);
const myn1 = arr2.slice(1,3)

// console.log(myn1);
// console.log("B", arr2);


const myn2 = arr2.splice(1,3)
// console.log(myn2)



const marvel_hero = ['thor', "spidy", "ironman"];
const dc_hero = ["superman", "flash", "batman"]

marvel_hero.push(dc_hero)

console.log(marvel_hero);