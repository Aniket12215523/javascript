//creating an array
let arr = [1,2,3];
console.log(arr[0]);
console.log(arr[1]);

//adding elementd to the end
arr.push(4);
console.log(arr);

//adding elements at the beginning
arr.unshift(-1);
console.log(arr);

//removing last element
let removeEle=arr.pop();
console.log("Last removed Element: "+removeEle);

//removing the first element
removeEle=arr.shift();
console.log("First removed Element: "+removeEle);

//Finding index of an element
let findIndex=arr.indexOf(3);
console.log("The Index of 3 is :"+findIndex);

//Iterating using a for loop
for (var i = 0; i < arr.length; i++) {
    console.log("Value at "+i+"th position is:"+arr[i]);
    }

//Slicing an array
let slicedArr=arr.slice(1,3);
console.log("Slice Array: ",slicedArr);

//splicing an array (modifying original array)
let removed = arr.splice(1,2,"a","b");
console.log("Removed Elements:",removed);

//concatenating array
let moreArr=[5,6];
let concatArr=arr.concat(moreArr);
console.log("Concatination Result: ",concatArr);