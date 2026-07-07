function factorial(number) {
    // number has to be greater than 1
    if (number < 1) {
        return "Please enter a number greater than 0"
    }
    // base special case
    if (number === 1) {
        return 1
    }
    // recursive case; number * factorial(number-1)
    return number * factorial(number - 1)
}

console.log(factorial(5)) // Answer should be 120