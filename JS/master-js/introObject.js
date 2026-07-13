const { Agent } = require("undici-types")

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
    top_speed: 250,
engine_information: {
    cylinders: 8,
    horsepower: 460
    },
manufacture: {
    name: "Ford",
    aka: "Ford Motor Company",
    country: "USA"
    },
    fun_fact: "The Mustang was named after the P-51 Mustang fighter plane.",
    is_it_a_classic: true,
    alert_info: function () {
    alert(JSON.stringify(this, (key, value) => {
        return value;
    }, 2));
}

};

module.export = car;