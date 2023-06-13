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

const data = new Date()
const dia = data.getDate()
const sem = data.getDay()
const mes = data.getMonth()
console.log(`hoje é ${diaSem[sem]}, dia ${dia} de ${mesesAno[mes]} `)

//CALCULAR DIFERENCA DE DIAS
const qtdDia = ()=> {
  
let tip = tipValue.value
tip = Number(tip)
if(tip>0 && tip<6){

let start = dataInin[tip -1]   
let end = inputEnd.value

start = new Date(start)
end   = new Date(end)


console.log(end)


//let data = new Date()
//dia = data.getDate()
console.log(`------------${dia}`)

let diffInTime = Math.abs(end - start)
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
    // if(resCons.firstChild ==null){
    //   console.log("sim")
      
    // }else{
    //   console.log('nao')
    // }
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
    let end = inputEnd.value
    console.log(`-------->>>>>>>`+ end)
    end = new Date(end)
    diaEnd = end.getDate()
    console.log(diaEnd)


      if(fOut === "F"){
       
      folgaOuTrabalha = "Folga"
      span.classList= "cardFolg"
      span.innerHTML = `Nesse dia você estará ${folgaOuTrabalha}`
      divCard.appendChild(span)
      resCons.appendChild(divCard)
      console.log(divCard)

    }else if(fOut === "T"){
      folgaOuTrabalha = "Trabalha"
      span.classList= "cardTrab"
      span.innerHTML = `${mesesAno[mes]}<br/> ${diaSem[sem]} , dia ${dia}<br/>${folgaOuTrabalha} <br/>`
      divCard.appendChild(span)
      resCons.appendChild(divCard)
      console.log(divCard)

    }else{
      folgaOuTrabalha = ""
    }
 })






  //chat gpt
// button.addEventListener("click", ()=>{
//     const diffInDays = qtdDia()
//     const index = Math.floor(diffInDays)
//     const elemento = folgas[index]
//     span.innerHTML = elemento
// })

