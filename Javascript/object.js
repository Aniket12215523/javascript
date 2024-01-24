//defining objects

// let car={
//     make:"Toyota",
//     model:"Camry",
//     year:2022,
//     isElectric:false,
//     start: function(){
//         console.log("Engine started!");
//     }
// };
// //accessing object properties
// console.log(car.make);
// console.log(car.model);
// console.log(car.year);

// //calling a method
// car.start();

// object constructor
//object constructor function
function Book(title, author, year){
    this.title= title;
    this.author = author;
    this.year = year;
}

//creating instances off the object
let book1 = new Book ("The Catcher in the Rye","JD Salinger",1951);
let book2 = new Book ("Harry Potter and the Sorcerers Stone","JK",1971);

console.log(book1.title + " was written by " + book1.author +" in "+ book1.year+".");
console.log(book2.title + " was written by " + book2.author+" in "+ book2.year+".");