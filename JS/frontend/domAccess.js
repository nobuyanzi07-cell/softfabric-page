// 1. getElementById
const divById = document.getElementById("div1");
console.log(divById);

// 2. getElementsByClassName
const elementsByClass = document.getElementsByClassName("list-item");
console.log(elementsByClass);

// 3. querySelector
//  for the id
const divByQuerySelector = document.querySelector("#div1");
console.log(divByQuerySelector);

//  for the class (querySelector - only gets the first match)
const firstItemByQuerySelector = document.querySelector(".list-item");
console.log(firstItemByQuerySelector);

//  for the class (querySelectorAll - gets all matches as a NodeList)
const allItemsByQuerySelectorAll = document.querySelectorAll(".list-item");
console.log(allItemsByQuerySelectorAll);

// Loop through the NodeList and print each element
for (let i = 0; i < allItemsByQuerySelectorAll.length; i++) {
  console.log(allItemsByQuerySelectorAll[i]);

}

const otherFruits = [ "kiwi", "pineapple", "Dragon"]
const originalDiv = document.getElementById('div1').innerHTML
//
console.log(originalDiv)

function original() {
    console.log("original clicked")
    document.querySelector("#div1").innerHTML = originalDiv
}

function replace() {
    //console.log("replaced clicked")
    const newHtml = `
     <h3>List Chores</h3>
        <ul>
            <li class="list-item">Clean Bathroom<li>
            <li class="list-item">Clean Kitchen<li>
            <li class="list-item">Fetch water<li>
        </ul>
        `
        document.querySelector("#div1").innerHTML = newHtml
}

function updateFruits() {
    console.log("update fruits")
     const items = document.querySelectorAll(".list-item");

    for (let i = 0; i < items.length; i++) {
        items[i].innerText = otherFruits[i];
    }
}

document.getElementById("original").addEventListener("click", original);
document.getElementById("replace").addEventListener("click", replace);
document.getElementById("updateFruits").addEventListener("click", updateFruits);

