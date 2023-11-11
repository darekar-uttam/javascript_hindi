//destructuring of object

const course = {
    courseName: "JS Hindi",
    price: 999,
    courseTeacher: "hitesh"
}

// course.courseTeacher

const {courseTeacher:inst} = course
console.log(inst);

//talked about JSON