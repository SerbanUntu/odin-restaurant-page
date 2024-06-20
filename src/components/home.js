import homeData from './home.json';

export default function loadHomeTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `<h1>Home</h1>`;
  return content;
}