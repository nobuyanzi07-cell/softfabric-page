let val1=true
let val2=true
let result1=val1&&val2

console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let mercy_age=15
let mercy_balance=50000

let is_greater_than_18=mercy_age>18
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`mercy has more than 20k ${has_more_than_20k}`)
console.log(`mercy ade is greater than 18
    and has more than 20k in her account
    ${is_greater_than_18&&has_more_than_20k}`)

let simplified=mercy_age>18&&mercy_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is ${mercy_age>18&&mercy_balance>20000}`)

console.log(`mercy is ade is greater than 18 or she has more than 20k in her account ${is_greater_than_18||has_more_than_20k}`)

console.log(`this is not true = ${!true}`)
console.log(`this is not false = ${!true}`)
