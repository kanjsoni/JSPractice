/*Question - Write a program which enter marks in three subject of a students and calculate its average, independing on the average
	check and print the division according to following rule.
	
	Average                      Division
	60+                           First
	45 - <60                      Second
	33 - <45                      third
	<33                           Fails */

    let subject1 = 60;
    let subject2 = 60;
    let subject3 = 90;
    
    let avg = (subject1+subject2+subject3)/3;
    if(avg >= 60 ){
        console.log("You got ", avg, "% First Division");
    }else if(avg>= 45 ){
        console.log("You got ", avg, "%Second Division");
    }else if(avg>= 33 ){
        console.log("You got ", avg, "% Third Division")
    }else{
        console.log("You got ", avg, "% Fail")
    }
    
    