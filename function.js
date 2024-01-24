//function expression
// const multiply=function(a,b){
//     return a*b;
// };
// //Invocation
// const product=multiply(4,6);
// console.log('Functional expression - Product:',product);

//trying hosting for the above code
// const product=multiply(4,6);
// const multiply=function(a,b){
//     return a*b;
// };
// //Invocation

// console.log('Functional expression - Product:',product);
//there will be an error known as cannot access multiply function before intialization
//because it is defined after invocation

//Arrow Functions
const multiplyArrow= (a, b) => {return a * b;}

//Invocation
const productArrow = multiplyArrow(5, 10);
console.log("Arrow Function - Product :", productArrow);

// //Parameter less functions
// const getRandomNumber=()=> Math.random();
// console.log("Random Number Generated by Parameter Less Arrow Function : ",getRandomNumber);



