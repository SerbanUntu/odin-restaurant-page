import menuData from './menu.json';
import images from './images.bundle';

export default function loadMenuTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `
    <h1>Menu</h1>
    <h2>Main courses</h2>
  `;
  menuData.items.forEach((item, index) => {
    const domItem = document.createElement('div');
    domItem.innerHTML = `
      <img src="${images[index]}" alt="${item.name}">
      <strong>${item.name}</strong>
      <p class="price">${item.price}</p>
    `;
    domItem.classList.add('menu-item');
    if (index === 10) content.innerHTML += `<h2>Desserts</h2>`;
    content.appendChild(domItem);
  });
  return content;
}