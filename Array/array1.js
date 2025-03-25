// 1. Write a program that stores 5 integers in an array and prints them.

let num = [1, 2, 3, 4, 5];

console.log("Araay elements");

console.log(num);

//2. Modify the previous program to print the stored values in reverse order.

num.reverse();

console.log("Reversed Array element");

console.log(num);

// 3. Write a program that takes 5 integer inputs from the user, stores them in an array, and prints them.

let arr = new Array(10, 20, 30, 40, 50);
 console.log("Array : ", arr);

 // 4. Store 7 integers in an array and print only those values that are greater than 100.

 

 // 5. Write a program that stores roll number (int) and total marks (float) of a student in an array and prints them.

 let student = [2, 56.9];
 console.log(student);

 // 6. Store 5 integers in an array, copy them into another array, and print both arrays.

 let a1 = [2, 4 ,5 , 6, 6];
 let a2 = a1 ;
 console.log("a1 ", a1);
 console.log("a2 ", a2);

 /* 8. Store 'n' integers in an array and print:
 - The sum of all numbers
 - The average of all numbers */

 let arr2 = [6, 7, 5, 4, 7, 7, 23, 7, 56, 90];
 let sum = 0;
 for( let i= 0 ; i < arr2.length ; i++){
    sum += arr2[i];
 }
console.log("Sum = ", sum);

let avg = sum/arr2.length ;

console.log("Average =", avg);

// 9. Store 7 integers in an array, find the maximum value, and print it.

let arr3 = [6, 7, 5, 4, 7, 7, 23, 7, 56, 90];

let sortarr = arr3.sort(function(a,b) {return a -b} );
console.log("Sorted Array ", sortarr);
let maxvalue = sortarr[sortarr.length -1];
console.log("Maximum :", maxvalue);


// 10. Store 8 integers in an array, ask the user for a number to search, and print its first occurrence position using linear search.

let arr4 = [3, 5, 7, 8, 7, 6, 7, 3]
let element =  7; // prompt("enter any integer");
 let res = linearSearch (arr4 , element);
 if(res != -1){
    console.log("Value ", element, "found at index", arr4.indexOf(element));

}else{
    console.log("Value ", element, " is not found");
}
function linearSearch (arr4 , element){
    for(let i ; i< arr4.length; i++){
        if(arr4[i] = element){
            return i; 
        }
        return -1;
    }
}



// 11. Modify the previous program to print all occurrences of the number and its total count.


function countfreq( arr4, element){
    let count = 0 ;
    for(let i = 0 ; i< arr4.length; i++){
        if(arr4[i] == element){
            count ++ ;
        }
       
    }
    return count; 
    }


console.log(element, " is found ",countfreq( arr4, element) , "times");

// 12. Store 2 integers in an array, ask the user for a number, and check if it's present in the array.

// 13. Write a program that finds the minimum value in an array of 10 integers.
let arr5 = [6, 7, 5, 4, 7, 7, 23, 7, 56, 90];

let sortar = arr5.sort(function(a, b) {return b - a} );
console.log("Sorted Array ", sortar);
let minvalue = sortar[sortar.length -1];
console.log("Minimum :", minvalue);

// 14. Store 10 numbers in an array and sort them in ascending order.

let arr6 = [6, 7, 5, 4, 7, 7, 23, 7, 56, 90];

let asc = arr6.sort(function(a,b) {return a - b } );
console.log("Ascending order : ", asc);

// 15. Store 10 numbers in an array and sort them in descending order.

let des = arr6.sort(function(a,b) {return b - a } );
console.log("Descending order :", des);

// 16. Write a program that removes duplicate elements from an array.
let ar =[3, 6, 4, 6, 3, 8, 6, 8];
let a = [];
ar.forEach(element1 => {
    if(!a.includes(element1)){
        a.push(element1);
    }
});

console.log(a);
// 17. Store a list of student names in an array and print them in sorted order.

let studentName =["Faisal", "Aliya", "Kriti", "Ranjan", "Fatima", "Nabil", "Sanskar", "Tejus", "Tapas", "Hari"];
console.log(studentName.sort());

// 18. Write a program that rotates an array to the left by 2 positions.
let arr7 = [4, 8, 6, 4, 9, 6, 3, 9, 2];
let left = 2;
for(let i = 0 ; i < left ; i++){
    let s = arr7.shift();
}
console.log(arr7);
// 19. Write a program that rotates an array to the right by 3 positions.

let right= 3;
for(let i = 0 ; i < right ; i++){
    let s = arr7.pop();
}
console.log(arr7);
// 20. Write a program that merges two sorted arrays into a single sorted array.

let newarr = arr2.concat(arr4);
console.log(newarr);
// 21. Write a program that finds the second largest number in an array.
let arr8 = [6, 7, 5, 4, 7, 7, 23, 7, 56, 90];

let ascd = arr8.sort(function(a,b) {return a - b } );
console.log("Second largest : ", ascd[ascd.length- 2]);
// 22. Create an array of 10 numbers and count how many of them are even and odd.
let arr9 = [7, 8, 4, 3, 1, 9, 4, 7, 3, 8];
function evencount( arr9 ){
    let even = 0;
    for(let i = 0 ; i < arr9.length ; i++ ){
        
        
        if( arr9[i] % 2 == 0 ){
            even++ ;
        }   
           
    }
    return  even; 
}
console.log("Total even no. : ", evencount(arr9));
console.log("total Odd no. :", arr9.length - evencount(arr9));


// 23. Write a program to find the frequency of each element in an array.


// 24. Write a program to insert an element at a specific position in an array.
// 25. Write a program to delete an element from an array at a given index.
// 26. Write a program that swaps the first and last elements of an array.
// 27. Write a program to check if two arrays are equal.
// 28. Write a program that finds all pairs of elements in an array whose sum is equal to a given number.
// 29. Write a program to find the intersection of two arrays.
// 30. Write a program to find the union of two arrays.

