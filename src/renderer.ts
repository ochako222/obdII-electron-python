const { ipcRenderer } = require('electron');


const getCheckObdButton = document.getElementById('check-obd') as HTMLButtonElement;
const getStatusIndicator = document.getElementById('status-indicator') as HTMLDivElement
const getStatusText = document.getElementById('status-text') as HTMLSpanElement


const pythonOutput = document.getElementById('python-output') as HTMLPreElement;

const seyHello = document.getElementById('say-hello') as HTMLPreElement;

getCheckObdButton.addEventListener('click', () => {
  ipcRenderer.send('check-obd-connection');
});

seyHello.addEventListener('click',()=>{
  ipcRenderer.send('click-on-say-hello')
})

ipcRenderer.on('say-hello-response', (event: any,response:string)=>{
  pythonOutput.innerText = response;
})




ipcRenderer.on('obd-connection-status', (event: any, status: string) => {
 
  if (status = 'Not Connected') {
    getStatusIndicator.style.backgroundColor = 'orange';
    getStatusText.innerText = status;
  } else {
    getStatusIndicator.style.backgroundColor = 'green';
    getStatusText.innerText = status;
  }
});


