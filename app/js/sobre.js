const { ipcRenderer, shell } = require("electron")
const process = require("process")

let linkFechar = document.querySelector("#linkFechar")
let linkGithub = document.querySelector("#linkGithub")
let electronVersion = document.querySelector("#electronVersion")

window.onload = function () {
  electronVersion.textContent = process.versions.electron
}

linkFechar.addEventListener("click", function () {
  ipcRenderer.send("fecharJanelaSobre")
})

linkGithub.addEventListener("click", function () {
  shell.openExternal("https://www.github.com/GuilhermeSCLima")
})
