let score = "33abc"
//let score1 = null
let score1 = undefined
console.log(typeof score);
console.log(typeof (score1));// in case of undefined the value will be Nan after conversion to number
console.log(typeof score1) // the output value for null will be 0 in null case after converted to number



let valueInNumber = Number(score1)// to convert the string to number 
console.log(typeof (valueInNumber));
console.log(valueInNumber)// output will be NaN which says its not a pure number



//"33"= > 33
//"33abc" = > Nan
//undefined => nan
//null => 0
//boolean => 0/1


let isLoggedIn= 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


// 1=> true
//0=>false
//"" =>false
//"anystring" =>true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)