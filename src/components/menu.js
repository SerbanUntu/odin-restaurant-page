import menuData from './menu.json';

export default function loadMenuTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `<h1>Menu</h1>`;
  return content;
}