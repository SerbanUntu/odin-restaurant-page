import menuData from './menu.json';
import img1 from '../images/sushi-burger-deluxe.jpg';
import img2 from '../images/teriyaki-chicken-burger.jpg';
import img3 from '../images/tempura-fish-taco.jpg';
import img4 from '../images/california-roll-burger.jpg';
import img5 from '../images/spicy-tuna-nachos.jpg';
import img6 from '../images/samurai-sliders.jpg';
import img7 from '../images/bbq-eel-sandwich.jpg';
import img8 from '../images/fusion-ramen-burger.jpg';
import img9 from '../images/panko-crusted-chicken-burger.jpg';
import img10 from '../images/shrimp-tempura-burger.png';
import img11 from '../images/green-tea-cheesecake.png';
import img12 from '../images/mochi-ice-cream-trio.jpg';

export default function loadMenuTab () {
  const content = document.createElement('div');
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
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