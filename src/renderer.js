const { ipcRenderer } = require('electron');

const reconnectButton = document.getElementById('reconnectBtn')
const connectionStatus = document.getElementById('connectionStatus')

const readErrorsButton = document.getElementById('readErrorsBtn')
const cleanErrorsButton = document.getElementById('clearErrorsBtn')

const outputField = document.getElementById('logsOutput')

readErrorsButton.addEventListener('click',()=>{
  ipcRenderer.send('click-on-read-errors')
})

cleanErrorsButton.addEventListener('click',()=>{
  ipcRenderer.send('click-on-clean-errors')
})

ipcRenderer.on('log-response', (response)=>{
  outputField.innerText = response;
})


reconnectButton.addEventListener('click',()=>{
  ipcRenderer.send('click-on-reconnect')
})


ipcRenderer.on('update-connection-status', (event, status) => {
  if (status = 'Not Connected') {
    connectionStatus.innerText = status
  } else {
    // getObdStatus.class = 'badge badge-success';
    // // getObdStatus.innerText = status;
    connectionStatus.innerText = status
  }
});


