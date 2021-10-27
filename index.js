// Este é o arquivo principal da app que definirá:
// - largura das janelas
// - local do index.html

const path = require('path')
const {app, BrowserWindow, Menu} = require('electron')

// require('./app.js')				// só se for escrever dados, caso contr. este arq não é neces.

let mainWindow
Menu.setApplicationMenu(null)

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
