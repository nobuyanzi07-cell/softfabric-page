let n = 0
let condition = true

//while (condition) {
    console.log(`n: ${n}`)
    n = n + 1
    if (n >= 100) {
        condition = false
    }
//}

function countDown(n) {
    while (true) {
        console.log(`n: ${n}`)
        n = n - 1
        if (n < 0) {
          break
        }
    }
console.log("countdown done")
}


console.log("countdown done")

