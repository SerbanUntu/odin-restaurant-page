import homeData from './home.json';

export default function loadHomeTab () {
  const content = document.createElement('div');
  const hoursList = document.createElement('ul');
  content.id = 'content';
  content.innerHTML = `
    <h1>${homeData.name}</h1>
    <p class="indent">${homeData.description}</p>
    <h2>Hours</h2>
  `;
  homeData.hours.forEach(weekDay => {
    hoursList.innerHTML += `
      <li><p><span class="week-day">${weekDay.day}: </span>${weekDay.start} - ${weekDay.end}</p></li>
    `;
  });
  content.appendChild(hoursList);
  content.innerHTML += `
    <h2>Location</h2>
    <p class="text-center">${homeData.location}</p>
  `;
  return content;
}