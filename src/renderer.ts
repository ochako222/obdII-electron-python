const { ipcRenderer } = require('electron');

const getPythonFirstButton = document.getElementById('first-button') as HTMLButtonElement;
const getPythonSecondButton = document.getElementById('second-button') as HTMLButtonElement;

const pythonOutput = document.getElementById('python-output') as HTMLPreElement;

getPythonFirstButton.addEventListener('click', () => {
  ipcRenderer.send('run first button');
});

getPythonSecondButton.addEventListener('click', () => {
  ipcRenderer.send('run second button');
});

ipcRenderer.on('python-output', (event: any, output: string) => {
  pythonOutput.innerText = output;
});