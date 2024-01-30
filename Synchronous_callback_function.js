//Synchronous_callback_function
function parentFunction(name, callback){
    callback();
    console.log("Hey"+name);
}

function randomFunction(){
    console.log("Hey I am callbackFunction");
}

parentFunction("Random string",randomFunction);