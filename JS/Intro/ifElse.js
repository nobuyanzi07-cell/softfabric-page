let age= prompt ("Enter your age")
console.log(`age is ${age} typeof ${typeof age}`)
alert(`you have entered your age`)

//assuming age=27
//27>10
if (age < 10){
    alert(`you are a kid`)
} else if (age < 13){
    alert (`your a teenager`)
} else if (age<18){
    alert (`you are legalley able to drink and smoke`)
} else if (age<=27){ 
    alert (`you are able to get in to a relationship`)
} else if (age<=45){
    alert (`you should consider retirement`)
} else if (age<=50){
    alert(`consider retirement due to old age`)
}
