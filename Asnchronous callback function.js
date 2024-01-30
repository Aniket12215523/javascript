function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey"+name);
}

// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }
parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});