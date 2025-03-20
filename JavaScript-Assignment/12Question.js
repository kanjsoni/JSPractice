// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


//date today
const currentDate = new Date();
console.log(currentDate);

//seconds elapsed from January 1, 1970 to now
 const d = new Date(1);
 console.log(d);
 console.log(currentDate*d);

 // year today

 console.log(currentDate.getFullYear());

 //month today as a number

let currentMonth =currentDate.getMonth(Number) +1;
console.log(currentMonth);

//hours now

console.log(currentDate.getHours(Number));

// minutes now

console.log(currentDate.getMinutes(Number));
