const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const numCap = document.getElementById("capitulo")

var taTocando = false;
var capitulo = 1;

//MUDA O NÚMERO DO CAPÍTULO//
mudaCapitulo()
function mudaCapitulo(){
    numCap.innerText = "Capítulo " + capitulo;
}

//BOTÃO//
botaoPlayPause.addEventListener("click", taOuNao);
botaoProximo.addEventListener("click", proximo);
botaoAnterior.addEventListener("click", anterior);

//PLAY//
function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    taTocando = true;
}

//PAUSE//
function pausarFaixa(){
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle");
    botaoPlayPause.classList.remove("bi-pause-circle");
    taTocando = false;
}

//VERIFICA SE ESTA PAUSADO OU NÃO//
function taOuNao(){
    if(taTocando === true){
        pausarFaixa();
    }
    else{
        tocarFaixa();
    }
}

//PRÓXIMO ÁUDIO//
function proximo(){
    if  (capitulo < 10){
        capitulo += 1;
        troca();
    }
    else{
        capitulo = 1;
        troca();
    }
}

//ÁUDIO ANTERIOR//
function anterior(){
    if(capitulo > 1){
        capitulo -= 1;
        troca();
    }
    else{
        capitulo = 10;
        troca();
    }
}

//TROCA DE FAIXAS//
function troca(){
    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3";
    tocarFaixa();
    mudaCapitulo()
}