import { Workbox } from 'workbox-window';
import Editor from './editor';
import { getDb } from './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

getDb()
  .then((content) => {
    editor.setContent(content);
  })
  .catch((error) => {
    console.error('Failed to retrieve content:', error);
  })
  .finally(() => {
    if (typeof editor === 'undefined') {
      loadSpinner();
    }
  });

window.addEventListener('blur', () => {
  const content = editor.getContent();
  putDb(content)
    .then(() => {
      console.log('Content stored successfully');
    })
    .catch((error) => {
      console.error('Failed to store content:', error);
    });
});

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}