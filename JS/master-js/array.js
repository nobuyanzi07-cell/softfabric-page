

let array1 = ["Mustang", "GT", "green", 250, {
    cylinders: 8,
    horsepower: 460,
    displacement_per_cylinder: 112,
    }, {
    name: "Ford",
    aka: "Ford Motor Company",
    country: "USA"
    }, function () {
        console.log(this)
    }, function () {
        alert(`Car: ${this.name}
            model: ${this.model}
            colour: ${this.color}
            top_speed: ${this.top_speed}`
        )     
    }, "The Mustang was named after the P-51 Mustang fighter plane.",
    [10, 22, 30]
];

console.table(array1);
console.table(car);

const carValuesArray = Object.values(car);
carValuesArray.push([7, 13, 21, 42]);

console.log(carValuesArray);

console.log(carValuesArray[0]);
console.log(carValuesArray[1]);
console.log(carValuesArray[2]);
console.log(carValuesArray[3]);
console.log(carValuesArray[4]);
console.log(carValuesArray[5]);
console.log(carValuesArray[6]);
console.log(carValuesArray[7]);
console.log(carValuesArray[8]);


for (let i = 0; i < array1.length; i++) {
    console.log("i is", i)
    console.log(array1[i])
}