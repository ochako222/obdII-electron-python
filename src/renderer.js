const { ipcRenderer } = require('electron');


const getCheckObdButton = document.getElementById('check-obd') 
const getStatusIndicator = document.getElementById('status-indicator') 
const getStatusText = document.getElementById('status-text') 


const pythonOutput = document.getElementById('python-output') 

const seyHello = document.getElementById('say-hello')

getCheckObdButton.addEventListener('click', () => {
  ipcRenderer.send('check-obd-connection');
});

seyHello.addEventListener('click',()=>{
  ipcRenderer.send('click-on-say-hello')
})

ipcRenderer.on('say-hello-response', (event,response)=>{
  pythonOutput.innerText = response;
})




ipcRenderer.on('obd-connection-status', (event, status) => {
 
  if (status = 'Not Connected') {
    getStatusIndicator.style.backgroundColor = 'orange';
    getStatusText.innerText = status;
  } else {
    getStatusIndicator.style.backgroundColor = 'green';
    getStatusText.innerText = status;
  }
});


