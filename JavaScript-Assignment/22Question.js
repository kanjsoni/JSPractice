// 22. Write a program which tells the number of days in a month.

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

let date = new Date();
let month = 3;
let year = 2025;
console.log("Number of days in " + month + " and month of the year " + year + " is " + daysInMonth(month, year));

