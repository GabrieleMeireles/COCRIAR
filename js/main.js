

// Seleciona o botão pelo ID

function changeColorAndReset(button) {
    button.classList.add("clicked"); // Adiciona a classe clicked ao botão
    setTimeout(function() {
        button.classList.remove("clicked"); // Remove a classe clicked após 1 segundos
    }, 1000); // Intervalo de 1 segundos (1000 milissegundos)
}

var saibaMaisBtn = document.getElementById("saibaMaisBtn");

saibaMaisBtn.addEventListener("click", function() {
    saibaMaisBtn.classList.add("clicked"); // Adiciona a classe clicked
    saibaMaisBtn.classList.add("new-color"); // Adiciona a classe para nova cor
    changeColorAndReset(saibaMaisBtn);

});
// Seleciona todos os botões "Ver Mapa" pelo ID e adiciona os eventos de clique
var verMapaBtn1 = document.getElementById("verMapaBtn1");
var verMapaBtn2 = document.getElementById("verMapaBtn2");
var verMapaBtn3 = document.getElementById("verMapaBtn3");

verMapaBtn1.addEventListener("click", function(event) {
    event.preventDefault(); // Impede que a página role para cima
    verMapaBtn1.classList.add("clicked"); // Adiciona a classe clicked
    changeColorAndReset(verMapaBtn1);
});

verMapaBtn2.addEventListener("click", function(event) {
    event.preventDefault(); // Impede que a página role para cima
    verMapaBtn2.classList.add("clicked"); // Adiciona a classe clicked
    changeColorAndReset(verMapaBtn2);
    
});

verMapaBtn3.addEventListener("click", function(event) {
    event.preventDefault(); // Impede que a página role para cima
    verMapaBtn3.classList.add("clicked"); // Adiciona a classe clicked
    changeColorAndReset(verMapaBtn3);
});

// Seleciona o botão enviarBtn pelo ID e adiciona o evento de clique
var enviarBtn = document.getElementById("enviarBtn");

enviarBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Impede que a página role para cima

    changeColorAndReset(enviarBtn);

    /*enviarBtn.classList.add("clicked"); // Adiciona a classe clicked ao botão Enviar*/
});

/*APAGAR ESSE - TESTANDO
const menu=document.getElementById("menu")[0];
const topoNav=menu.offsetTop;//metodo de leitura que retorna em px a distância do elemento em relação ao topo*/

/*APAGAR ESSE

//chamar a função 
window.onscroll=function(){
    requestAnimationFrame(fixarMenuNoTopo);
};
    fixarMenuNoTopo();

/*APAGAR ESSE


function fixarMenuNoTopo(){
    if(window.scrollY>=topoNav){
        menu.classList.add("fixoNoTopo");
    }else{
        menu.classList.remove("fixoNoTopo");
    }
};*///APAGAR ESSE

const menu = document.getElementById("menu");
const topoNav = menu.offsetTop;

// chamar a função
window.onscroll = function() {
    requestAnimationFrame(fixarMenuNoTopo);
};

function fixarMenuNoTopo() {
    if (window.scrollY >= topoNav) {
        menu.classList.add("fixoNoTopo");
    } else {
        menu.classList.remove("fixoNoTopo");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("emailInput");
    const enviarBtn = document.getElementById("enviarBtn");
    const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");
    const emailEnviado = document.getElementById("emailEnviado");

    enviarBtn.addEventListener("click", function(event) {
        event.preventDefault();
        enviarEmail();
    });

    function enviarEmail() {
        const email = emailInput.value;
        
        // Simulando o envio de e-mail com um atraso
        setTimeout(function() {
            mensagemConfirmacao.style.display = "block";
            emailEnviado.textContent = email;
            emailInput.value = ""; // Limpa o campo de e-mail após o envio

            setTimeout(function() {
                mensagemConfirmacao.style.display = "none";
            }, 1000); // Oculta a mensagem após 1 segundo 
        }, 1500); // Simula o envio de e-mail após 1,5 segundos
    }
});
