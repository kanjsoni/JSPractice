// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortdata = ages.sort();
console.log(sortdata);
let min_age = sortdata[0];
console.log("Minimun age ", min_age);
let max_age = sortdata[sortdata.length-1];
console.log("Maximum age", max_age);
let average_age = (19 + 22 + 19 + 24 + 20 + 25 + 26 + 24 + 25 + 24)/10 ;
console.log(average_age);
let range = max_age - min_age ;
console.log("Range ", range);
let CompareMin = min_age - average_age;
console.log("Minimum - Average ",Math.abs(CompareMin));
let CompareMax = max_age - average_age;
console.log("Maximum - Average ",Math.abs(CompareMax));