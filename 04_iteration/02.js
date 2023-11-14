const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

// for (const key in myObject) {
//   console.log(`${key} shortcut for  ${myObject[key]}`);
// }

//for in on Array

const progmming = ['js', 'cpp','python']

for (const key in progmming) {
 //console.log(progmming[key])
}


//for each

// progmming.forEach(function (item){
//   console.log(item);
// });

// progmming.forEach((item)=>{
//   console.log(item);
// })

// function prinMe(item){
//   console.log(item);
// }

// progmming.forEach(prinMe)


// progmming.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })



const myCoding  = [
  {
    languageName:"JavaScript",
    languageFile: "js"
  },
  {
    languageName:"Python",
    languageFile: "py"
  },
  {
    languageName:"Cpp",
    languageFile: "c"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})