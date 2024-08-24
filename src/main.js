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

ipcMain.on('click-on-say-hello', (event) => {
  const pythonProcess = spawn('python3', ['obd/obd_controller.py', 'say_hello']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('say-hello-response', data.toString());
  });
});


ipcMain.on('check-obd-connection', (event) => {
  const pythonProcess = spawn('python3', ['obd/obd_controller.py', 'check_obd_connection']);

  pythonProcess.stdout.on('data', (data) => {
    event.reply('obd-connection-status', data.toString());
  });
});

app.whenReady().then(createWindow);