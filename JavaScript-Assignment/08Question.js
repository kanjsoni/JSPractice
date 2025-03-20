// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let sentence = "You cannot end a sentence with because because because is a conjunction";
let words = sentence.indexOf("with")+1 ;
console.log(words);