
const relief = 2400; 

// - Get gross salary
let grossMonthly;
while (true) {
    let gross = prompt(`Enter gross salary`);
    if (!isNaN(gross)) {
        gross = Number(gross);
        if (gross > 0) {
            grossMonthly = gross;
            break;
        }
    }
    alert(`Invalid amount entered.
        Ensure enter number more than 0`);
}
console.log(`Gross salary is ${grossMonthly}, its type is ${typeof grossMonthly}`);

// NSSF 
const NSSF_TIER_I_LIMIT = 9000;
const NSSF_TIER_II_LIMIT = 71000;

let nssfTierI = Math.min(grossMonthly, NSSF_TIER_I_LIMIT) * 0.06;
let nssfTierII = Math.max(0, Math.min(grossMonthly, NSSF_TIER_II_LIMIT) - NSSF_TIER_I_LIMIT) * 0.06;
let nssf = nssfTierI + nssfTierII;

console.log(`NSSF is ${nssf}`);
alert(`NSSF is ${nssf}`);

// Taxable income
let taxable = grossMonthly - nssf;

//PAYE bands
function calcPaye(amount) {
    const bands = [
        { lower: 0, upper: 24000, rate: 0.10 },
        { lower: 24000, upper: 32333, rate: 0.25 },
        { lower: 32333, upper: 500000, rate: 0.30 },
        { lower: 500000, upper: 800000, rate: 0.325 },
        { lower: 800000, upper: Infinity, rate: 0.35 },
    ];

    let tax = 0;
    let tier = null;

    for (const band of bands) {
        if (amount > band.lower) {
            const taxableInBand = Math.min(amount, band.upper) - band.lower;
            tax += taxableInBand * band.rate;
        }
    }

    // figure out which tier the amount falls into
    for (const band of bands) {
        if (amount > band.lower && amount <= band.upper) {
            tier = `${band.lower.toLocaleString()}-${band.upper === Infinity ? 'above' : band.upper.toLocaleString()} ksh`;
            break;
        }
    }

    return { tax, tier };
}

let { tax: payeBeforeRelief, tier } = calcPaye(taxable);
let finalTax = Math.max(payeBeforeRelief - relief, 0);

console.log(finalTax);
alert(`PAYE IS ${finalTax} and tier level is ${tier}`);

// Housing Levy 
let levy = grossMonthly * 0.015;
console.log(`House levy is ${levy}`);
alert(`House levy is ${levy}`);

// SHIF
let shif = grossMonthly * 0.0275;
console.log(`Shif is ${shif}`);
alert(`Shif is ${shif}`);

//Total deductions
let ded = nssf + levy + shif + finalTax;
console.log(`Total Deductions is ${ded}`);
alert(`Total deductions is ${ded}`);

//Net pay 
let net = grossMonthly - ded;
console.log(`Net pay is ${net}`);
alert(`Net pay is ${net}`);