const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkGithub = document.querySelector("#linkGithub");
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre');
})

linkTwitter.addEventListener('click', function () {
    shell.openExternal("https://www.github.com/guilhermesclima");
})
