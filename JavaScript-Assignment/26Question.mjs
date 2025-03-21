// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
import { country } from "./24Question/countries.mjs";
// console.log(country.includes("Ethiopia"));

if(country.includes("Ethiopia") == true){
    console.log("Exist in list");
} else {
    country.push("ETHIOPIA");
    console.log(country[country.length-1]);
}