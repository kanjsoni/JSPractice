// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Enter Radius of circle");
const pi = 3.14 ;
if(radius<0){
    console.log("Invalid Area / Circumference");
} else{
    area = pi*radius*radius;
    console.log("Area of Circle =", area);

    circumference = 2*pi*radius;
    console.log("Circumference of Circle =", circumference);
}