// 30. Write a script which generates a random hexadecimal number.

let hexref = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let hexadecimal = hexref[Math.floor(Math.random() * 16)];
console.log(hexadecimal);
