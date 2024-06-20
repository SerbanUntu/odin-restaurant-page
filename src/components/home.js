import homeData from './home.json';

export default function loadHomeTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `
    <h1>${homeData.name}</h1>
    <p class="indent">${homeData.description}</p>
    <h2>Hours</h2>
    <ul>
      <li>
        <p><span class="week-day">${homeData.hours[0].day}: </span>${homeData.hours[0].start} - ${homeData.hours[0].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[1].day}: </span>${homeData.hours[1].start} - ${homeData.hours[1].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[2].day}: </span>${homeData.hours[2].start} - ${homeData.hours[2].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[3].day}: </span>${homeData.hours[3].start} - ${homeData.hours[3].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[4].day}: </span>${homeData.hours[4].start} - ${homeData.hours[4].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[5].day}: </span>${homeData.hours[5].start} - ${homeData.hours[5].end}</p>
      </li>
      <li>
        <p><span class="week-day">${homeData.hours[6].day}: </span>${homeData.hours[6].start} - ${homeData.hours[6].end}</p>
      </li>
    </ul>
    <h2>Location</h2>
    <p class="text-center">${homeData.location}</p>
  `;
  return content;
}