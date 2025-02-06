let i;
let m =0;
let flag =0;
let n =9;
m=n/2;
if(n==0 || n ==1){
    console.log(n," is not prime number");

}else {
    for(i=2;i<=m;i++){
        if(n%i==0){
           console.log(n,"not a prime no.");
            flag = 1;
            break ;
        }
    }
    if (flag ==0)
        {
            console.log(n, "is prime number");
        }

    }