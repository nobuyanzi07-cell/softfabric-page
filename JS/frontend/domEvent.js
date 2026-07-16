function clickAlert(e) {
    alert("hi this is cool")
}

function mouseOverAlert(cat){
    console.log(cat)
    console.log("mouse over",new Date())
}

document
.querySelector("#btn-event-checker")
.addEventListener("click", clickAlert)

document.querySelector("#btn-event-checker").addEventListener("mouseover", mouseOverAlert)

function songAlert(music) {
    console.log(music)
    console.log("mouse over", new Date())
}

document
.querySelector("#song")
.addEventListener("mouseover", songAlert)


window.addEventListener("mousemove", (e) => {
    console.log("x direction",e.clientX)
    console.log("y direction",e.clientY)
})

window.addEventListener("mousemove", (e) => {
  document.querySelector("#coordinates").textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});