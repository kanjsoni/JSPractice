// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt("Enter any number");

if(num % 2 == 0){
    console.log(num, "is an even number");
} else {
    console.log(num, "is an odd nuumber");
}