function areCircle(r) {
    return 3.142 * r * r; // area of a circle
} // named function

let age = 23;
let samsAge = age; // samsAge = 23

let ac = areCircle;
let k = areCircle(5);

//console.log(typeof ac); // "function"
//console.log(ac);  


//function rectangleArea(l, w) {
  //  return l * w;
//}

let rA = function rectangleArea(l, w) {
    return l * w;
}

rA(5, 3) // 15

// simply function expression
let rA2 =(l, w) => {
    return l * w;
}
rA2(5, 3) // 15