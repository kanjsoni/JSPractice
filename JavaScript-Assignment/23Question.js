// 23. Write a program which tells the number of days in a month, now consider leap year.
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

let date = new Date();
let month = 2;
let year = 2024;
console.log("Number of days in " + month + " and month of the year " + year + " is " + daysInMonth(month, year));
