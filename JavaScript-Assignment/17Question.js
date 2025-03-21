// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();
let currentsetOff = date.getTimezoneOffset();
let ISTOFFset = 330; // ISToffset UTC + 5:30;
let ISTtime = new Date(date.getTime() + (ISTOFFset + currentsetOff)*60000);
let hoursISt = ISTtime.getHours();
let minutesIst = ISTtime.getMinutes();

console.log(ISTtime," ", hoursISt, minutesIst );