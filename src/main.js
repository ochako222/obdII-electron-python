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

ipcMain.on('click-on-read-errors', (event) => {
  const pythonProcess = spawn('python3', ['obd/main.py', 'read_errors']);
  pythonProcess.stdout.on('data', (data) => {
    event.reply('log-response', data.toString());
  });
});


ipcMain.on('click-on-clean-errors', (event) => {
  const pythonProcess = spawn('python3', ['obd/main.py', 'clean_errors']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('log-response', data.toString());
  });
});


ipcMain.on('click-on-reconnect', (event) => {
  const pythonProcess = spawn('python3', ['obd/main.py', 'check_obd_connection']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('update-connection-status', data.toString());
  });
});



app.whenReady().then(createWindow);