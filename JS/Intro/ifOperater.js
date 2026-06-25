let age=prompt("Enter your age")
alert(`You entered ${age}`)

//age =27
//27>10:true
if (age<10){
    alert(`your a child`)
}

//27>13:true
if(age<13){
    alert(`your a teen`)
}

//27>18:true
if (age<18){
    alert (`your are legally able to smoke and drink`)
}

//27>27:true
if (age<=27){
    alert(`best age for a relationship`)
}

//27>45:false
if (age>=45){
    alert (`best age for retirement`)
}

//27>50:false
if (age>=50){
    alert(`Your past working age`)
}