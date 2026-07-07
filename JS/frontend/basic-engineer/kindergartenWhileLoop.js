//Validation
function getNumber() {
    let num1, num2

    while (true) {
        num1 = prompt("Enter the first number")
        num1 = parseInt(num1)

        if (isNaN(num1) || num1 <= 1){
            console.error("Invalid input. Enter number greater than 1")
            continue;
        }
    
        num2 = prompt("Enter the second number")
        num2 = parseInt(num2)

        if(isNaN(num2) || num2 <=1){
            console.error("Invalid input. Enter number greater than 1")
            continue;
        }

        break;
    }

    console.log(`Got numbers: ${num1} and ${num2}`);
    generateTable(num1, num2);

 }

//Multiplication generator
function generateTable(num1,num2){
    if (num1 <= 1 || num2 <= 1) {
        console.log("Both numbers must be greater than one")
        return;
    }

    for(let outer= num1; outer >= 1; outer--){
        console.log("-----")
        for (let inner = num2; inner >=1; inner--) {
            console.log(`${outer} * ${inner} = ${outer * inner}`)
        }
    }
    console.log("-----")
    console.log("Multiplication Table Complete")
}