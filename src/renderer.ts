const { ipcRenderer } = require('electron');


const getCheckObdButton = document.getElementById('check-obd') as HTMLButtonElement;
const getStatusIndicator = document.getElementById('status-indicator') as HTMLDivElement
const getStatusText = document.getElementById('status-text') as HTMLSpanElement


const pythonOutput = document.getElementById('python-output') as HTMLPreElement;

getCheckObdButton.addEventListener('click', () => {
  ipcRenderer.send('check-obd-connection');
});

ipcRenderer.on('obd-connection-status', (event: any, status: string) => {
  // pythonOutput.innerText = status;

  if (status = 'Not Connected') {
    getStatusIndicator.style.backgroundColor = 'yellow';
    getStatusText.innerText = status;
  } else {
    getStatusIndicator.style.backgroundColor = 'green';
    getStatusText.innerText = status;
  }
});


