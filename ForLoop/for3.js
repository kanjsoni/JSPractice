// WAP  which enter any integer and print its multiplication table in table format . Format 8*1=8

let n= prompt("Enter the number ");
let i= 1;
let m;
for(i=1; i<=10; i++){
    m= n*i;
    console.log(n, "*",i,"=",m)
}