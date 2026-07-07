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

function promptStudent() {
    let num1 = null;
    let num2 = null;
    while (true) {
        num1 = prompt("Enter a number: ");
        if (isNaN(num1)) {
            countinue;
        }
        num2 = prompt("Enter another number: ");
        if (isNaN(num2)) {
            countinue;
        }
        break;
    }
    console.log(`Got numbers: ${num1} and ${num2}`);
    mathTable(num1, num2);
}

function mathTable(num1, num2) {
    if (!num1 || num1 < 0 || !num2 || num2 < 0) {
        console.error("Invalid input. Please enter positive numbers.");
        return;
    }
    let outerLoop = num1;
    while (outerLoop > 0) {
        doInnerLoop(outerLoop, num2);
        outerLoop--;
    }
    //while(outerLoop > 0) {
    //  let innerLoop = num2;
    //  while (innerLoop > 0) {
    //     console.log(`outerLoop: ${outerLoop}, innerLoop: ${innerLoop}`);
    //     console.log (`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`)
    //     innerLoop = innerLoop - 1;
    //    }
    //     outerLoop = outerLoop - 1
    // }
}

//individual//testseparte
function doinnerLoop (outerLoop,num1) {
    while (innerLoop > 0) {
         console.log(`outerLoop: ${outerLoop}, innerLoop: ${innerLoop}`);
         console.log (`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`)
        innerLoop = innerLoop - 1;
        }
        innerLoop = innerLoop - 1;
    }
