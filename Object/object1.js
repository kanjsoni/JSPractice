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
// 13. Write a program that checks if an object is empty.
// 14. Create an object representing a rectangle with properties like width and height and a method to calculate area.
// 15. Write a program that converts an object into an array of key-value pairs.
// 16. Write a function that checks if a given key exists in an object.
// 17. Create an object representing a movie with properties like title, director, and rating. Print its details.
// 18. Write a program that sorts an array of objects based on a given property.
// 19. Create an object representing a smartphone with properties like brand, model, and price. Print its details.
// 20. Write a program to find the total price of all items in a shopping cart represented as an array of objects.
// 21. Write a function that takes an object and returns a new object with only the specified keys.
// 22. Write a program to convert an array of objects into a single object grouped by a specific property.
// 23. Write a program to update the value of a specific key in an object dynamically.
// 24. Write a program that finds the property with the highest numeric value in an object.
// 25. Create an object representing a library with an array of books and methods to add and remove books.
// 26. Write a program that serializes and deserializes a JSON object.
// 27. Write a function that compares two objects and checks if they are equal.
// 28. Write a program to clone an object using Object.assign and spread operator.
// 29. Write a program that finds the most frequently occurring value in an object.
// 30. Write a program to dynamically generate an object from user input.
