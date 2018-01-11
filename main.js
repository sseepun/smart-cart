
const { app, BrowserWindow } = require('electron')
const path = require('path')
// const url = require('url')

const child_process = require('child_process')
// const ng = child_process.spawn('ng', ['build']);
// const mongo_server = child_process.spawn('mongod', ['--dbpath=./db', '--port', '19000'])
const app_apis = child_process.spawn('node', ['server.js'])
// const ng = child_process.spawn('ng', ['serve']);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        useContentSize: true,
        darkTheme: true,
        frame: false,
        fullscreen: true,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/img/logo.png`
    })
    // icon: path.join(__dirname, 'dist/favicon.ico')
    
    // and load the index.html of the app
    win.loadURL(`file://${__dirname}/dist/index.html`)  
    win.maximize()  
    // setTimeout(function() { 
    //     win.loadURL('http://localhost:2000')
    //     win.maximize()
    // }, 100)

    // Open the DevTools
    // win.webContents.openDevTools()
  
    // Emitted when the window is closed.
    win.on('closed', function () {
      win = null
    })
}


// This method will be called when Electron has finished initialization 
// and is ready to create browser windows
// Some APIs can only be used after this event occurs
app.on('ready', createWindow)


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // if (process.platform !== 'darwin') {
        // mongo_server.kill('SIGINT');
        // ng.kill('SIGINT');
        app_apis.kill('SIGINT');
        app.quit();
    // }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})
  
  
// app.on('before-quit', function() {
    
// })
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.