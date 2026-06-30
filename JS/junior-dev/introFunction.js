function timeAlert () {
    const date = new Date ();
    alert (
        `time stamp: ${date.toLocaleDateString("en-KE",{
            timeZone: "Africa/Nairobi",
        })}`,
    );
}

timeAlert();

// area of a triangle

function areaOfTriangle(base,height) {
    if (typeof base !== "number"){
    console.error(`when using area of a triangle ensure the base is a number`)
    return;
}
if (typeof height !== "number"){
    console.error(`when using area of triangle ensure height is a number`)
    return;
}
    console.log(`base  height is ${base} its type is ${typeof base}`);
    console.log(`height is ${height} and its type is ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with the base of ${base} and height of ${height}, its area is ${area}`,
    );
}


let base1 = "hello"
let height1 = true;
areaOfTriangle(base1,height1)