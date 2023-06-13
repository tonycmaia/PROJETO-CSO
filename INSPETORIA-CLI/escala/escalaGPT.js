const tipValue = document.querySelector('#nmr')
const inputEnd = document.querySelector("#end")
const button = document.querySelector("button")
const resCons = document.querySelector("#resCons")




const diaSem = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]
const mesesAno =["Janeiro","Fevereiro","Março", "Abril", "Maio","Junho","Julho","Agosto","Setembro", "Outubro","Novembro", "Dezembro"]

const folgas = [
    "F",
    "T", "T", "T",
    "F", "F",  
    "T", "T","T",
    "F", "F",
    "T", "T","T",    
    "F", "F",
    "T", "T","T","T", 
    "F", "F",
    "T", "T",
    "F", "F",
    "T", "T","T",
    "F", "F",
    "T", "T","T",
    "F"
]

const dataInin=[
"2022-12-18",
"2023-01-08",
"2022-12-25",
"2023-01-15",
"2023-01-01",
]

let data = new Date()
let dia = data.getDate()
let sem = data.getDay()
let mes = data.getMonth()+1
console.log(`hoje é dia: ${dia} , ${diaSem[sem]} de ${mesesAno[mes]}`)

const qtdDia = ()=> {
  
let tip = tipValue.value
tip = Number(tip)

console.log(tip)
if(tip>0 && tip<6){

let start = dataInin[tip -1]   
let end = inputEnd.value

start = new Date(start)
end   = new Date(end)
console.log(end)

//let data = new Date()
//dia = data.getDate()
console.log(`hoje é dia${dia}`)

let diffInTime = (end - start)
let timeInOnDay = 1000 * 60 * 60 * 24
let diffInDays = diffInTime / timeInOnDay

return diffInDays
}else{
  alert("Tipologia Inválida. Digite valor entre 1 e 5")
}
}
//BOTAO CONSULTAR FOLGA

var index = 0











button.addEventListener("click", ()=>{
    
    let tip= tipValue.value
    // Check if there's already a result in the resCons element
    const existingCard = resCons.querySelector(".cardFolga")
    if (existingCard) {
        existingCard.remove()
    }

    const diffInDays = qtdDia()
    let dif = diffInDays
    if(dif>35){
        index = dif % 35
    }else{
        index = dif
    }

    let fOut = folgas[index]
    let folgaOuTrabalha = fOut
    let divCard = document.createElement("div")
    divCard.classList="cardFolga"
        
    let span = document.createElement("span")
    
    if(fOut === "F"){
        folgaOuTrabalha = "Folgando"
        span.classList= "cardFolg"
        span.innerHTML = `Nesse dia você estará ${folgaOuTrabalha}`
        divCard.appendChild(span)
        resCons.appendChild(divCard)

    }else if(fOut === "T"){
        folgaOuTrabalha = "Trabalhando"
        span.classList= "cardTrab"
        span.innerHTML = `${mesesAno[mes] }<br/> ${diaSem[sem]} dia ${dia}<br/>${folgaOuTrabalha} <br/> Tipologia${tip}`
        divCard.appendChild(span)
        resCons.appendChild(divCard)

    }else{
        folgaOuTrabalha = ""
    }
})