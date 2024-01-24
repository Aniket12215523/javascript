//try catch
try{
    //code that may throw an error
    throw new Error("An error");
}
catch(error){
    //code to handle error
    console.error(error.message);
}
finally{
    //this block will always execute, regardless of whether or not there was an error
    console.log("Cleanup code");
}