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

ipcMain.on('run first button', (event, arg) => {
  const pythonProcess = spawn('python3', ['script.py']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('python-output', data.toString());
  });
});

ipcMain.on('run second button', (event, arg) => {
  const pythonProcess = spawn('python3', ['script.py', 'message']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('python-output', data.toString());
  });
});

app.whenReady().then(createWindow);