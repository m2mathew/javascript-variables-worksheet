/*

JavaScript variables worksheet

Declare a variable age with a numerical value of 43.
Declare a varaible name with a string value of your name.
Declare a variable isCool with a boolean value of true.
Declare a variable height with a string value of 5.67.
Declare a variable heightInt that is the integer value of your height variable.
Declare a variable heightNumber that is the full decimal value of your height variable.
Increase the value of your heightNumber variable by 0.13.
Declare a variable statement that has the value of the name variable with the string " is really cool" appended to it.
Redefine the name variable to Bob or Sally.
Declare a variable isBob that is equal to the boolean value true if name is equal to Bob. Otherwise it should be false.
Declare a variable isSally that is equal to the boolean value true if name is equal to Sally.Otherwise it should be false.

*/

var age = 43;

var name = "Mike";

var isCool = true;

var height = "5.67";

var heightInt = height.parseInt;

var heightNumber = height.parseFloat;

heightNumber += 0.13;

var statement = name + " is really cool";

name = Bob;

if (name == Bob)
    var isBob = true;
else
    var isBob = false;

if (name == Sally)
    var isSally = true;
else
    var isSally = false;


var name = "Mike";
var statement = name + " is really cool";
name = Bob;
var statement = name + " is really cool";
