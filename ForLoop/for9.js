// A LUCAS SERIES IS GIVEN 1,3,4,7,11,18,29..... THE THIRD NUMBER IS SUM OF PREVIOUS TWO NUMBER .WAP TO PRINT FIRST TEN NUMBER OF LUCAS SERIES.
let n= prompt("enter the term you want to print the series.");
let a=1;
let b= 3;
console.log(a);
console.log(b);
for(let i= 1; i<n-1; i++){
    let c= a+b;
    console.log(c);
    a= b;
    b= c;
    
}