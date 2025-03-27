//## *Object-Based Questions:*

// 1. Create an object that stores details of a student (name, age, marks) and prints it.

let student = {
    fullName : "Hari Teja",
    age : 20,
    marks : 97
};

console.log(`
    Name : ${student.fullName}
    Age : ${student.age}
    Marks: ${student.marks}
    `);
// 2. Modify the previous program to allow the user to enter student details dynamically.
/*
let student1 = {
    fullName : prompt("Enter your Name"),
    age: prompt("enter your age"),
    marks : prompt("Enter your marks")
};

console.log(`
    Name : ${student1.fullName}
    Age : ${student1.age}
    Marks: ${student1.marks}
    `);

    */

// 3. Write a program that stores multiple student records in an array of objects and prints them.

let StudentDetail = [
    {
        fullName : "Anjali Kumari",
        rollNo : 21 ,
        college : "Patna Univerit"
    },
    {
        fullName : "Hari Teja",
        rollNo : 126,
        college : "NIT Agartala"
    },
    {
        fullName : "Abhishek Choungdar",
        rollNo : 141,
        college : "NIT Andhra"
    },
    {
        fullName : "Sneha Kumari",
        rollNo : 78,
        college : "A N College"
    }

] ;

console.table(StudentDetail);
console.log(StudentDetail[0].fullName);
console.log(`
        Name : ${StudentDetail[1].fullName}
        RollNo : ${StudentDetail[1].rollNo}
        College : ${StudentDetail[1].college}
    `);


// 4. Store employee details (ID, Name, Salary) in an object and display them.

const employee =[
    {
        ID : 11001,
        Name : "Sarika Ojha",
        Salary : 70000
    },
    {
        ID : 11002,
        Name : "Sarita Ojha",
        Salary : 75000
    },
    {
        ID : 11003,
        Name : "Ritika Ojha",
        Salary : 76000
    },
    {
        ID : 11004,
        Name : "Rit Ojha",
        Salary : 78000
    },
    {
        ID : 11005,
        Name : "Kritika Jha",
        Salary : 60000
    }
];
console.log(`
    ID : ${employee[0].ID},
    Name : ${employee[0].Name},
    Salary : ${employee[0].Salary}
    `);
// 5. Modify the previous program to find the employee with the highest salary.
let max = 0; 
for(let i = 0 ; i < employee.length ; i++){
    if(employee[i].Salary > max){
        max = employee[i].Salary;
    }
}
console.log("Higher Salary ", max);
// 6. Write a program to count the number of properties in an object.
let count = employee.length;
console.log("No. Of Property ", count);
// 7. Create an object representing a book with properties like title, author, and price. Print all details.
let book ={
    Title : "Harry Potter",
    Author : "J.K Rowling",
    Price : 450
};

console.log(`
    Title : ${book.Title}
    Author : ${book.Author}
    Price : ${book.Price}
    `);
// 8. Write a function that takes an object and prints all its key-value pairs.

const keys = Object.keys(book);
const value = Object.values(book);
console.log(keys , " ", value);

// 9. Create an object representing a car with methods to start, stop, and display speed.

// 10. Write a program that deep clones an object without modifying the original.
// 11. Create an object representing a bank account with properties like account number, balance, and methods to deposit and withdraw money.
// 12. Write a program to merge two objects into a single object.
let car = {
    start : start(),
    stop : stop(),
    speed : speed()
};
function start(){
    is_running = true ;
    return "Start";
}
function stop(){
    is_running = false;
    return "Stop";
}
function speed(){
    is_running = true;
    return 100 ;

}
console.log(`
    start ${car.start}
    speed ${car.speed}
    `);
// 13. Write a program that checks if an object is empty.
let obj = {};

if( Object.keys(obj).length ==  0){
    console.log("Object is empty");
} else {
    console.log("Not empty ");

}
// 14. Create an object representing a rectangle with properties like width and height and a method to calculate area.

let rectangle ={
    height : 12,
    width : 10,

};
function area(){
    return rectangle.height*rectangle.width ;
}
console.log(`
    Height ${rectangle.height}
    Width ${rectangle.width}
    Area of Rectangle ${area()}
    `);
// 15. Write a program that converts an object into an array of key-value pairs.

// 16. Write a function that checks if a given key exists in an object.
let num ={
   n1 : 22,
   n2: 44,
   n3: 66,
   n4: 88,
   n5: 44,
   n6: 66,
   n7: 33
};
let n = 44 ;
let exist = console.log(Object.values(num).includes(n));
// 17. Create an object representing a movie with properties like title, director, and rating. Print its details.
let movie = {
    Title : "SALAAR (PART 1 - CEASEFIRE)",
    Director : "Sri N. Balram ",
    Rating :6.6 
};

console.log(`
    Movie name :    ${movie.Title}
    Director :      ${movie.Director}
    Rating :        ${movie.Rating}
    `);
// 18. Write a program that sorts an array of objects based on a given property.

// 19. Create an object representing a smartphone with properties like brand, model, and price. Print its details.

let smartphone = {
    brand : "MOTOROLA",
    model : "G62 5G",
    price : 15500
};
console.log(`
    Smartphone Details !!
    Brand :  ${smartphone.brand}
    Model :  ${smartphone.model}
    Price :  ${smartphone.price}
    `);
// 20. Write a program to find the total price of all items in a shopping cart represented as an array of objects.

let cartItems = {
    highlighter : 20 ,
    crayons : 100,
    pencil : 60,
    waterColor : 400,
    posterColor : 220,
    drawingSheet : 250,
    canvasPaper : 140,
    pencilColor : 2200,
    finelinesPen : 775,
    whiteGelPen : 75,
    blackSheet : 300,
    acrylicColor : 1200,
    acrylicSheet : 300
};
let billval = Object.values(cartItems);
console.log(billval);
let sum = 0;
 for (let i = 0 ; i < billval.length ; i++){
   sum += billval[i]
 }
 console.log(" Cart Bill " , sum);


    
// 21. Write a function that takes an object and returns a new object with only the specified keys.
// 22. Write a program to convert an array of objects into a single object grouped by a specific property.
// 23. Write a program to update the value of a specific key in an object dynamically.
// 24. Write a program that finds the property with the highest numeric value in an object.
let numberval = {
    a : 2345,
    b : 6543,
    c : 3456,
    d : 7654,
    e : 3463,
    f : 7865
};
let arr = Object.values(numberval);
console.log(arr);
let sortarr = arr.sort(function(a,b) {return a -b} );
let maxvalue = sortarr[sortarr.length -1];
console.log("Maximum :", maxvalue);
// 25. Create an object representing a library with an array of books and methods to add and remove books.
// 26. Write a program that serializes and deserializes a JSON object.
// 27. Write a function that compares two objects and checks if they are equal.
// 28. Write a program to clone an object using Object.assign and spread operator.
let src = {
    a : 23,
    b : 56,
    c : 98,
    d : 67
};

let des = Object.assign( { }, src);
 console.log(src);
 console.log(des);
let des1 = {... des, src};
console.log(des1);
// 29. Write a program that finds the most frequently occurring value in an object.
// 30. Write a program to dynamically generate an object from user input.
