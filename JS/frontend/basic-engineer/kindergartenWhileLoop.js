// Function 1: Prompt user for two valid numbers
function getNumbers() {
    let num1 = null;
    let num2 = null;

    while (true) {
        num1 = prompt("Enter the first number (greater than 1): ");
        if (isNaN(num1) || parseInt(num1) <= 1) {
            console.error("Invalid input. Please enter a number greater than 1.");
            continue;
        }

        num2 = prompt("Enter the second number (greater than 1): ");
        if (isNaN(num2) || parseInt(num2) <= 1) {
            console.error("Invalid input. Please enter a number greater than 1.");
            continue;
        }

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        break;
    }

    console.log(`Got numbers: ${num1} and ${num2}`);
    generateTable(num1, num2);
}

// Function 2: Generate multiplication table
function generateTable(num1, num2) {
    if (num1 <= 1 || num2 <= 1) {
        console.error("Both numbers must be greater than 1.");
        return;
    }

    // Outer loop: from num1 down to 1
    for (let outer = num1; outer >= 1; outer--) {
        console.log("-----");
        // Inner loop: from num2 down to 1
        for (let inner = num2; inner >= 1; inner--) {
            console.log(`${outer} * ${inner} = ${outer * inner}`);
        }
    }
    console.log("-----");
    console.log("Multiplication table complete!");
}
