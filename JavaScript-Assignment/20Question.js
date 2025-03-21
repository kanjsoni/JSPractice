// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let scores =  prompt("Enter your score");

if(scores > 80){
    console.log("Grade 'A' ");
} else if(scores > 70 ){
    console.log("Grade 'B' ");
} else if(scores > 60){
    console.log("Grade 'C' ");
} else if(scores > 50){
    console.log("Grade 'C' ");
}else{
    console.log("Grade 'F' ");
}