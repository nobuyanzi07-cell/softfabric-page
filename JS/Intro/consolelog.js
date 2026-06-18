const sallaryGross=500000;
console.log("Gross salary is ", sallaryGross)

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
