/* Write a MENU DRIVEN program, which calculate and print the area of squar or circle depending on the users coice
				from the menu.
		step 1 -
				  1. ...........Area of Square
				  2. ...........Area of circle
				       Enter your choice?
					   
		Step 2 - 
				Depending on choice it should ask:
				   Enter side of square?
				   or
				   Enter radius of circle?
				   
		Step 3 -
				output As-
				Area of Square whose side is ..... is .....
				or
				Area of circle whose Radius is ...... is ..... */

                let radiusOfCircle = 7 ;
                let sideOfSquare = 4;
               let choice = "Square";
               
               switch(choice){
                case "Circle":
                   let areaOfCircle = 3.14*radiusOfCircle*radiusOfCircle ;
                   console.log("Area of circle =", areaOfCircle);
                   break;
               case "Square":
                   let areaOfSquare = sideOfSquare*sideOfSquare;
                   console.log("Area of square =",areaOfSquare);
                   break;
                   default:
                       console.log("Wrong choice");
               }