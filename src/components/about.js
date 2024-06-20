import aboutData from './about.json';

export default function loadAboutTab () {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `
    <h1>About us</h1>
    <h2>History</h2>
    <p class="indent">${aboutData.history}</p>
    <h2>Key members</h2>
    <ul>
      <li>
        <p><span class="employee-title">${aboutData.employees[0].title}</span> <span class="employee-name">${aboutData.employees[0].name}</span></p>
        <p>${aboutData.employees[0].bio}</p>
      </li>
      <li>
        <p><span class="employee-title">${aboutData.employees[1].title}</span> <span class="employee-name">${aboutData.employees[1].name}</span></p>
        <p>${aboutData.employees[1].bio}</p>
      </li>
      <li>
        <p><span class="employee-title">${aboutData.employees[2].title}</span> <span class="employee-name">${aboutData.employees[2].name}</span></p>
        <p>${aboutData.employees[2].bio}</p>
      </li>
    </ul>
    <h2>Contact information</h2>
    <ul>
      <li>
        <p>${aboutData.contact.phone}</p>
      </li>
      <li>
        <p>${aboutData.contact.email}</p>
      </li>
      <li>
        <p>${aboutData.contact.socialMedia.instagram} (instagram)</p>
      </li>
      <li>
        <p>${aboutData.contact.socialMedia.twitter} (twitter)</p>
      </li>
      <li>
        <p>${aboutData.contact.socialMedia.youtube} (youtube)</p>
      </li>
    </ul>
  `;
  return content;
}