import aboutData from './about.json';

export default function loadAboutTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `<h1>About</h1>`;
  return content;
}