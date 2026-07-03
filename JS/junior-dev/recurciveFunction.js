function salaryGrossPromptProcess() {
    let gross = prompt("Enter your gross salary");
    if (isNaN(gross) && gross.trim() != "") {
        // CONDITION MET
        console.log(`Your gross salary is ${gross}`);
        return;
    }
    gross = prompt("Invalid gross salary entered.Enter a number for gross salary.try again");
    if (!isNaN(gross) && gross.trim() != "") {
        console.log(`your gross salary is ${gross}`);
    } else {
        salaryGrossPromptProcess()
    }
}
salaryGrossPromptProcess()