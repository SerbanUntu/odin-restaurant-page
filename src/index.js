import './styles/reset.css';
import './styles/style.css';
import loadAboutTab from './components/about';
import loadHomeTab from './components/home';
import loadMenuTab from './components/menu';

const aboutButton = document.querySelector('.about-button');
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');

let contentReference;
let currentTab;

setTab('home');

function setTab(tabName) {
  switch(currentTab) {
    case 'about':
      aboutButton.classList.remove('selected');
      break;
    case 'home':
      homeButton.classList.remove('selected');
      break;
    case 'menu':
      menuButton.classList.remove('selected');
      break;
  }
  if(contentReference) contentReference.remove();
  switch(tabName) {
    case 'about':
      contentReference = loadAboutTab();
      aboutButton.classList.add('selected');
      break;
    case 'home':
      contentReference = loadHomeTab();
      homeButton.classList.add('selected');
      break;
    case 'menu':
      contentReference = loadMenuTab();
      menuButton.classList.add('selected');
      break;
  }
  currentTab = tabName;
  document.body.appendChild(contentReference);
}

aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTab('about');
});

homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTab('home');
});

menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTab('menu');
});