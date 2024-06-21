import aboutData from './about.json';

export default function loadAboutTab () {
  const content = document.createElement('div');
  const employeesList = document.createElement('ul');
  const contactList = document.createElement('ul');
  content.id = 'content';
  content.innerHTML = `
    <h1>About us</h1>
    <h2>History</h2>
    <p class="indent">${aboutData.history}</p>
    <h2>Key members</h2>
  `;
  aboutData.employees.forEach(employee => {
    employeesList.innerHTML += `
      <li>
        <p><span class="employee-title">${employee.title}</span> <span class="employee-name">${employee.name}</span></p>
        <p>${employee.bio}</p>
      </li>
    `;
  });
  content.appendChild(employeesList);
  content.innerHTML += '<h2>Contact information</h2>';
  ['phone', 'email'].forEach(property => {
    contactList.innerHTML += `<li><p>${aboutData.contact[property]}</p></li>`
  });
  ['instagram', 'twitter', 'youtube'].forEach(property => {
    contactList.innerHTML += `<li><p>${aboutData.contact.socialMedia[property]} (${property})</p></li>`
  });
  content.appendChild(contactList);
  return content;
}