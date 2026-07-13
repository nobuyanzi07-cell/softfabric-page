

const student_name = "Soul"
const student_age = 24
const student_phone = "25436748302"

const parent_name = "Magdalena"
const parent_email = "fort3@gmail.com"

const student = {
    name: "hellle",
    age: 34,
    "fav quote": "dory",
    parent: {
        name: "deal-dough",
        phone: "2547453692",
    },
    pet:{}, 
    34: "fav number",
    sayMyName: function () {
        console.log(`John Mwangi`);
    },
    announce: function () {
        alert(`Present`)
    }
};

const car = {
    name: "Mustang",
    model: "GT",
    color: "green",
    top_speed: 250,
engine_information: {
    cylinders: 8,
    horsepower: 460,
    displacement_per_cylinder: 112,
    },
manufacture: {
    name: "Ford",
    aka: "Ford Motor Company",
    country: "USA"
    },
    null: "this is null",
    logThis: function () {
        console.log(this)
    },
    alert_info: function (){
        alert(`Car: ${this.name}
            model: ${this.name}
            colour: ${this.color}
            top_speed: ${this.top_speed}`
        )     
    },
    fun_fact: "The Mustang was named after the P-51 Mustang fighter plane.",
    is_it_a_classic: true,
    alert_info: function () {
    alert(JSON.stringify(this, (key, value) => {
        return value;
    }, 2));
}

};



//console.log(`Car datatype ${typeof car}`);
//console.log(car);
//console.log("--using console.log(table)--");
//console.table(car);

console.log(`Name is ${car.name} its type is ${typeof car.name}`) 
console.log(`Name is ${car["name"]} its type is ${typeof car["name"]}`)
console.log(`Model is ${car.model} its type is ${typeof car.model}`)
let v1 = "model"
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`)

const engine_information = car.engine_information;
console.log("Engine Information")
console.log(engine_information)
console.log(car["engine_information"])
console.log(car.engine_information)