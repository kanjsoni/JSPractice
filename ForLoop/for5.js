// WAP which enter any integer than calculate and print its digit.
let num =prompt("Enter any integer");
let n = num;
let sum=0;
for(;n>0; n=Math.floor(n/10)){
 sum += n%10;   
}
console.log("sum =",sum);
