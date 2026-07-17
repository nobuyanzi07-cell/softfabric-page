document.getElementById("form1").addEventListener("submit",submitForm)

document.getElementById("form1input1").addEventListener("input",(e) => {
    console.log(e.target.value)
})

document.getElementById("form2input2").addEventListener("change",(e) => {
    console.log(e.target.value)
})

function submitForm(e){
    e.preventDefault()
   // e.preventDefault()//stop auto submisson
   const inputList = document.querySelector("#form1").querySelectorAll("input")

   const input1 = inputList[0]
   const input2 = inputList[1]
   console.log("input 1", input1.value)
   console.log("input 2", input2.value)
   console.log("f1 input1", document.getElementById("form1input1").value)
    console.log("f2 input2", document.getElementById("form2input2").value)
    input1.value = "Cats and dogs"
}

window.addEventListener("beforeunload",(e)=> {
    console.log("Page is clode")
    e.preventDefault()
    e.returnValue = ""
})


