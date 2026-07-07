let n = 0
let condition = true

//while (condition) {
    console.log(`n: ${n}`)
    n = n + 1
    if (n >= 100) {
        condition = false
    }
//}

//function countDown(n) {
    while (true) {
        console.log(`n: ${n}`)
        n = n - 1
        if (n < 0) {
          break
        }
    }
console.log("countdown done")
//}


//console.log("countdown done")

// Prompt student for two positive numbers
function promptStudent() {
    let num1 = null;
    let num2 = null;

    while (true) {
        num1 = prompt("Enter a number: ");
        if (isNaN(num1)) continue;

        num2 = prompt("Enter another number: ");
        if (isNaN(num2)) continue;

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (num1 <= 0 || num2 <= 0) continue;

        break;
    }

    console.log(`Got numbers: ${num1} and ${num2}`);
    mathTable(num1, num2);
}

// Multiplication table using nested loops
function mathTable(num1, num2) {
    if (!num1 || num1 < 0 || !num2 || num2 < 0) {
        console.error("Invalid input. Please enter positive numbers.");
        return;
    }

    let outerLoop = num1;
    while (outerLoop > 0) {
        doInnerLoop(outerLoop, num2);
        outerLoop = outerLoop - 1;
    }
}

// Inner loop for multiplication
function doInnerLoop(outerLoop, num2) {
    let innerLoop = num2;
    while (innerLoop > 0) {
        console.log(`outerLoop: ${outerLoop}, innerLoop: ${innerLoop}`);
        console.log(`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`);
        innerLoop = innerLoop - 1;
    }
}
