const numbers= document.querySelector(".numeri")
for (i=1; i<=76; i++){
   let numberelements= document.createElement("p")
    numberelements.textContent= " "+i
    numbers.appendChild(numberelements)
 }
document.body.appendChild(numbers)

let bottone= document.querySelector(".bottone")
let numoutput= document.querySelector(".num_output")
bottone.addEventListener("click", function(){
    let numrandom= Math.floor(Math.random()*76)+1
    numoutput.innerText=numrandom
})
