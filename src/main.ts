import { app, BrowserWindow, ipcMain } from 'electron';
import { spawn } from 'child_process';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.webContents.openDevTools();
  win.loadFile('index.html');
}


ipcMain.on('check-obd-connection', (event) => {
  const pythonProcess = spawn('python3', ['script.py']);

  pythonProcess.stdout.on('data', (data) => {
    // const status = data.toString().trim();
    event.reply('obd-connection-status', data.toString());
  });
});

app.whenReady().then(createWindow);