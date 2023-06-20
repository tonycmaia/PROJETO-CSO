// const msg=()=>{
//     alert ("Projeto em construção")
// }
const conteudoPrincipal = document.querySelector("#conteudo")
console.log(conteudoPrincipal)


const workers = [

    {nome:"tony",
    tipologia:1,
    cargo: "Agente de Segurança"},

    {nome:"vieira",
    tipologia: 2,
    cargo:"Agente de Segurança"},

    {nome:"cicero",
    tipologia: 2,
    cargo: "Agente de Segurança"},

    {nome:"flopes",
    tipologia:3,
    cargo: "Agente de Segurança"},

    {nome:"natanael",
    tipologia: 1,
    cargo: "Agente de Segurança"},

    {nome:"tertuliandro",
    tipologia: 5,
    cargo:"Agente de Segurança"},

    {nome:"fchagas",
    tipologia: 4,
    cargo: "Agente de Segurança"},

    {nome:"jadson",
    tipologia: 3,
    cargo: "Agente de Segurança"},

    {nome:"gomes lima",
    tipologia: 4,
    cargo: "Agente de Segurança"},

    {nome:"mendes",
    tipologia: 5,
    cargo: "Agente de Segurança"},

    {nome:"mauricio",
    tipologia: 5,
    cargo: "Agente de Segurança"},

    {nome:"macedo",
    tipologia: 1,
    cargo: "Agente de Segurança"},

    {nome:"Uilson",
    tipologia: 3,
    cargo: "Agente de Segurança"},

    {nome:"Lennon",
    tipologia: 2,
    cargo: "Agente de Segurança"},

    {nome:"Douglas",
    tipologia: 4,
    cargo: "Inspetor de Segurança"},
]
const agentes=workers.map(e => e.nome)

console.log("lista de agentes de CLI: "+agentes)

let verificarListarAgentes = true
function listarAgentes(){
agentes.map((el)=>{
    if(verificarListarAgentes){
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","agt")
        novoElemento.setAttribute("class","content_target")
        novoElemento.innerHTML=el
        conteudoPrincipal.appendChild(novoElemento)
        }
    })

    verificarListarAgentes = false
}

//listarAgentes()


var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft= "-10vw";
        navigationHeader.style.animationName = "showSidebar";
        content.style.filter = "blur(5px)";
    }else{
        navigationHeader.style.marginLeft= "-100vw"; 
        navigationHeader.style.animationName = "";
        content.style.filter = "";
    }
}


function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}


window.addEventListener("resize",(e)=>{
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
})



