const { app, BrowserWindow, ipcMain } = require("electron");

app.on("ready", () => {
    console.log("App online")
    let mainWindow = new BrowserWindow({
        width: 600,
        heigth: 300
    })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
});

app.on("window-all-closed", () => {
  app.quit();
})

let sobreWindow = null;

ipcMain.on("abrirJanelaSobre", () => {

  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      heigth: 200,
      width: 400,
      alwaysOnTop: true,
      frame: false,
      center: true,
    })

    sobreWindow.on("closed", () => {
      sobreWindow = null
    })
  }

  sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`)
})

ipcMain.on("fecharJanelaSobre", function () {
  sobreWindow.close()
})

ipcMain.on("cursoParado", (event, curso, tempoEstudado) => {
  console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`)
})
