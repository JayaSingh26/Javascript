//Types of Operaters

//Assignment operator
// Arithmetic operator
// In arithmetic we increment and decrement operator
// Comparison operators
// Logical operator
// String operators 
// Conditional(ternary) operator .


//Assignment Operators are used to assign value to the variables

//example

var myfavNumber = 13
// console.log(myfavNumber);



//****************************Arithmetic Operators**************************

//Arithmetic operators perform basic mathematical opeartions on variables or values. They include addition, subtraction,  multiplication, division and modulo

let x = 3
let y = 7
let sum = x+y
// console.log(sum);


let x1 = 7
let y1 = 3
let sub = x1-y1
// console.log(sub);


let x2 = 3
let y2 = 7
let multiplication = x2*y2
// console.log(multiplication);


let x3 = 7
let y3 = 7
let division = x3/y3
// console.log(division);



let x4 = 14
let y4 =4 
let mod = x4%y4
// console.log(mod);


//****String Operations ******/
let str1 = "Jaya"
let str2 = " Singh"
let str3 = str1 + str2
// console.log(str3);
// console.log("1" + 2)
// console.log(1+ "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2+ "2")


// *****Comparison Operators*****//

//Comparison operator comapares the values and return the boolean result


// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1);
// console.log("2"===2)


//**********Logical Operators**************** */

//There are three main logical operationss:&&(logical and ),||(logical or ) and !(logical not)

let a = 4
let b = 12
// console.log(a>0 &&b>0);
// console.log(a>10 || b>0);
// console.log(a==b);


//********ternary operation****** */
//syntax condition?expressionIFTRUE:expressionIfFalse


let age = 18
let result =age>=18?"eligible":"Not eligible"
// console.log(result);


//expressions always evaluates from left to right
console.log(2<12<5);
//output is true because after first evaluation the value is true that is 1 so type coercion takes place  