//WAP which enter number of odd no. to be generated and printed and may odd number should be generated and printed.

let n1= 4
let n2= 9
let i=0;
if(n1%2===0){
    n1= n1+1;
}
console.log("odd number series");
while(i<n2){
    console.log(n1);
    n1= n1+2;
    i++;
}