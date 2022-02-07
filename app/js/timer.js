const { ipcRenderer } = require("electron")
const moment = require("moment")
let segundos;
let timer;
let tempo;
let segundo;

module.exports = {
  iniciar(el){
    tempo = moment.duration(el.textContent)
    let segundos = tempo.asSeconds()
    clearInterval(timer)
    timer = setInterval(() => {
      segundos++
      el.textContent = this.segundosParaTempo(segundos)
      segundo = segundos;
      console.log("segundos: " + segundos)
      console.log("segundo: "+ segundo);
    }, 1000)
  }, parar(curso){
    clearInterval(timer)
    let tempoEstudado = this.segundosParaTempo(segundo)

    ipcRenderer.send("cursoParado", curso, tempoEstudado)

  }, segundosParaTempo(segundos){
    return moment().startOf("day").seconds(segundos).format("HH:mm:ss")
  }
}
