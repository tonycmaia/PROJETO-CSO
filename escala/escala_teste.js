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
  
var tip = tipValue.value
tip = Number(tip)
if(tip>0 && tip<6){

var start = dataInin[tip -1]   
var end = inputEnd.value
console.log("DATA CONSULTA " + end)

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


// ...




button.addEventListener("click", () => {
    const diffInDays = qtdDia();
    let dif = diffInDays;
    if (dif > 35) {
      index = dif % 35;
    } else {
      index = dif;
    }
    
    let tip = tipValue.value
    let fOut = folgas[index];
    let folgaOuTrabalha = fOut;
    let divCard = document.createElement("div");
    divCard.classList = "cardFolga";
  
    let span = document.createElement("span");
    let end = inputEnd.value;
    console.log(`-------->>>>>>>` + end);
    // Converter a data para o formato "yyyy-mm-dd"
    const [dia, mes, ano] = end.split("/");
    end = new Date(`${ano}-${mes}-${dia}`);
    diaEnd = end.getDate();
    let dayWeekEnd = end.getDay();
    let monthGetEnd = end.getMonth();
    console.log(diaEnd);
  
    if (fOut === "F") {
      folgaOuTrabalha = "Folga";
      span.classList = "cardFolg";
      span.innerHTML = `
      <p>${mesesAno[monthGetEnd]}</p>
      <p>${diaSem[dayWeekEnd]}, dia: ${diaEnd}</p>
      <p>${folgaOuTrabalha}</p>
      <p>Tipologia: ${tip}</p>
      `;

      divCard.appendChild(span);
      resCons.appendChild(divCard);
      console.log(divCard);
    } else if (fOut === "T") {
      folgaOuTrabalha = "Trabalha";
      span.classList = "cardTrab";
      span.innerHTML = `
      <p>${mesesAno[monthGetEnd]}</p>
      <p>${diaSem[dayWeekEnd]}, dia: ${diaEnd}</p>
      <p>${folgaOuTrabalha}</p>
      <p>Tipologia: ${tip}</p>
      `;
      
      console.log(diaEnd + "<<<<<<<<");
      divCard.appendChild(span);
      resCons.appendChild(divCard);
      console.log(divCard);
    } else {
      folgaOuTrabalha = "";
    }
  });
  