//setInterval function
// const repeatedFunction = ()=>{
//     console.log('Repeated function executed!');
// };
// const intervalId = setInterval(repeatedFunction,1000);//Executes every 1 second

//clearInterval function
//In caase you want it stop after some time
//function to be executed at intervals
function repeatedFunction(){
    console.log('Executing repeated function...');
}
//set an interval (execute repeatedFunction every 1000 milliswconds)
const intervalId = setInterval(repeatedFunction,1000);
//After some time (eg 5000 milliseconds), stop the interval 
setTimeout(()=> {
    clearInterval(intervalId); //stop the iterval
    console.log('Interval stopped');
},5000);
