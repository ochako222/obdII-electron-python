const { ipcRenderer } = require('electron');


const getCheckObdButton = document.getElementById('check-obd') as HTMLButtonElement;
const getStatusIndicator = document.getElementById('status-indicator') as HTMLDivElement
const getStatusText = document.getElementById('status-text') as HTMLSpanElement


const pythonOutput = document.getElementById('python-output') as HTMLPreElement;

getCheckObdButton.addEventListener('click', () => {
  ipcRenderer.send('check-obd-connection');
});




ipcRenderer.on('obd-connection-status', (event: any, status: string) => {

  pythonOutput.innerText = status;

  if (status = 'connected') {
    getStatusIndicator.style.backgroundColor = 'green';
    getStatusText.innerText = 'Connected';
  } else {
    getStatusIndicator.style.backgroundColor = 'red';
    getStatusText.innerText = 'Disconnected';
  }
});


