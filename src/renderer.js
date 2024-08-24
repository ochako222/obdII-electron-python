const { ipcRenderer } = require('electron');

console.log('This is a log from the renderer process');


const reconnectButton = document.getElementById('reconnectBtn')
const connectionStatus = document.getElementById('connectionStatus')

const readErrorsButton = document.getElementById('readErrorsBtn')
const cleanErrorsButton = document.getElementById('clearErrorsBtn')

const outputField = document.getElementById('logsOutput')


//  Button events
readErrorsButton.addEventListener('click',()=>{
  const port = connectionStatus.innerText
  ipcRenderer.send('click-on-read-errors',port)
})

cleanErrorsButton.addEventListener('click',()=>{
  const port = connectionStatus.innerText
  ipcRenderer.send('click-on-clean-errors',port)
})

reconnectButton.addEventListener('click',()=>{
  ipcRenderer.send('click-on-reconnect')
})


// Output event
ipcRenderer.on('log-response', (event, output)=>{
  outputField.innerText = output;
})


// Connection status event
ipcRenderer.on('update-connection-status', (event, status) => {

  // Here logic to manage ports according available or not
  // if (cleaned == 'Not Connected') connectionStatus.className = 'badge bg-warning me-3'
  // if (cleaned == 'Connected') connectionStatus.className = 'badge bg-success me-3'

  connectionStatus.innerText = status
});


