// Create a named function
function test() {
  console.log("Hello from test!");
}

// Assign that function to a variable
let myFunc = test;

//  Call both
test();      
myFunc();    

//Remove the original function name 
test = undefined;

//calling both
//test();    Error:
myFunc();    //works

//Anonymous function assigned directly
let anonyFunc = function() {
  console.log("Hello from anonymous!");
};

anonyFunc();  // Outputs "Hello from anonymous!"


function areCircle(r) {
    return 3.142 * r * r; // area of a circle
} // named function

let age = 23;
let samsAge = age; // samsAge = 23

let ac = areCircle;

console.log(typeof ac); // "function"
console.log(ac(5));     // Outputs the area of a circle with radius 5