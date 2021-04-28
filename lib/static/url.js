const { ipcRenderer } = require('electron');

document.getElementById('url-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const urlInput = document.getElementById('url');
  const url = urlInput.value;
  ipcRenderer.send('url-message', url);
});
