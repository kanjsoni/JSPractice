/*  Write a program which enter annual family income and of a person and if the income is from 1 lakh
	to 2 lakh and age is also form 18 to 24 then print eligible for scholorship, otherwise print not 
	eligible for scholorship. */

    let income = 120000;
    let age = 22;
     
    if(age <=24 && income <=200000){
        console.log("You are eligible for scholarship");
    }else{
        console.log("You are not eligible for scholarship");
    }
