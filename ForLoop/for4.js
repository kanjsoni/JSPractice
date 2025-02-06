// WAP which enter any integer and in reverse order.
let rn =0;
let i=0 ;
let n= prompt("Enter integer");
let num = n;
for(;n>0; n=Math.floor(n/10)){
    rn= rn*10 + (n%10);
}
console.log("Reverse number ", rn);