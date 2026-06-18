let numb1=749
console.log("numb1",numb1,"Its type is",typeof numb1)

let strNumb="892"
console.log("strNumb",strNumb,"Its type is",typeof strNumb)

let myName="John"
console.log('My name is',myName,"its type is",typeof myName)

let isMarried=true
console.log("isMarried",isMarried,"its type is", typeof isMarried)

let nullVal=null
console.log("nullVal",nullVal,"its type is", typeof nullVal)

let unValue;
console.log("unValue", unValue,"its type is", typeof unValue)



const bonus="5000"
const sallary=50000



const sallaryGross=sallary + bonus;
console.log("sallaryGross",sallaryGross,"its type is", typeof sallaryGross)

const paye=sallaryGross*0.16;
console.log("For gross sallary of",sallaryGross,"Paye is", paye)

const nhif=2500
console.log("Nhif dedaction",nhif)

const sha=3600
console.log ("Sha is",sha)

const totalDeductions= paye+nhif+sha
console.log("Total Deduction is", totalDeductions)

const netSallary= sallaryGross-totalDeductions
console.log("Your net sallary is", netSallary)
