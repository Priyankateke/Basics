var x = 16 + "Volvo";
console.log(x)

/*
 * JavaScript will treat the example above as:

var x = "16" + "Volvo";
 */

var y = "Volvo" + 16;  // Volvo16
var a = 16 + 4 + "Volvo";  //20Volvo
var b = "Volvo" + 16 + 4;  //Vovlvo164

/*JavaScript has dynamic types.
 This means that the same variable can be used to hold different data types:
*/
var type;           // Now x is undefined
type = 5;           // Now x is a Number
console.log(type)
type = "John";      // Now x is a String
console.log(type)