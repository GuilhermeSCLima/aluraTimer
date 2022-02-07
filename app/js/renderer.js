const { ipcRenderer } = require('electron');
const timer = require("./timer")

let linkSobre = document.querySelector('#linkSobre');
let botaoPlay = document.querySelector(".botao-play")
let tempo = document.querySelector(".tempo")
let curso = document.querySelector(".curso")

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrirJanelaSobre');
});

  let imgs = ["./img/play-button.svg", "./img/stop-button.svg"]
  let play = false

botaoPlay.addEventListener("click", function() {
  imgs = imgs.reverse()

  if (play) {
    timer.parar(curso.textContent)
    play = false
  } else {
    timer.iniciar(tempo)
    play = true
  }
  botaoPlay.src = imgs[0]
})
