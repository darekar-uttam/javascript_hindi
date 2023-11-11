//Immediately Invoked Function Expression(IIFE)

//named IIFI
(function demo1(){
    console.log("one");
})();

//un-named IIF or IIFI
((name) => {
    console.log(`two, ${name}`);
})('uttam')