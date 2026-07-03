// Functions for each shape
const areaCircle = (r) => 3.142 * r * r; // area of a circle
const areaTriangle = (b, h) => 0.5 * b * h; // area of a triangle
const areaRectangle = (w, h) => w * h; // area of a rectangle

console.log(`Area of a circle: ${areaCircle(10)}`)
console.log(`Area of a triangle: ${areaTriangle(10, 5)}`)
console.log(`Area of a rectangle: ${areaRectangle(10, 5)}`)

// super function

function shape(fn,shapeName,s1,s2,s3) {
    console.log(`Shape Name: ${shapeName}, type of shape is: ${typeof shapeName}`)
    console.log(`function is: ${fn} and is type is: ${typeof fn}`)
    console.log(`s1 is: ${s1} and its type is: ${typeof s1}`)
    console.log(`s2 is: ${s2} and its type is: ${typeof s2}`)
    console.log(`s3 is: ${s3} and its type is: ${typeof s3}`)
}

// calling the function with created parameters

const args = [s1,s2,s3].filter(val => val !== undefined)
const result = fn(...args)

console.log(`Area of ${shapeName}: ${result}`)
return result

// call shape with each function
shape(areaCircle,"circle",10)
shape(areaTriangle,"triangle",10,5)
shape(areaRectangle,"rectangle",10,5)