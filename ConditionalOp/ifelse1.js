/* 
Question - WAP which enter sales made by any salesman than calculate and print the commision, according
				to following rules - 
				Sale                      Commission
				upto 25000                5% of sales
				25001 - 50000             7% of sales
				50001 - 75000             8% of sales
				75001 +                   10% of sales */
 
                let sale = 358050;

                if(0> sale || sale<=25000){
                    console.log("Commision =", (25000*5)/100);
                }
                else if(sale >=25001 || sale<= 50000){
                    console.log("Commision =", (25000*7)/100);
                }else if(sale >=50001 || sale<= 75000){
                    console.log("Commision =", (25000*8)/100);
                }else{
                        console.log("Commision =", (25000*10)/100);
                    }
