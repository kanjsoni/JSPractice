// wap which enter any integer than calculate and prints its factorial.

let i= 0;
let n= prompt("Enter number");
let fact =1;
for(i = 1; i<= n; i++){
    fact = fact*i;
}
console.log("Factorial =",fact)