function sayMyName () {
    let first_name = "Samson";
    console.log(`First Name ${first_name}`);
    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);
    let full_name = `${first_name} ${second_name}`;
    console.log(`Names are ${full_name}`)
    return true;
}

let sayMyNameValue = sayMyName()

console.log (`Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`);
