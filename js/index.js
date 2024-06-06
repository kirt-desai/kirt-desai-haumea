let today = new Date();
let thisYear = today.getFullYear();

let footer = document.createElement('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `© YourName ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const body = document.querySelector('body');
body.appendChild(footer);

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const userEmail = event.target.userEmail.value;
    const messageContent = event.target.usersMessage.value; // Fixed reference to textarea

    console.log(usersName, userEmail, messageContent);

    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${usersName}</a>
        <span>${messageContent}</span>
    `;
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

// Replace {kirt_desai} with your GitHub username
fetch('https://api.github.com/users/kirt_desai/repos')
  .then(response => response.json())
  .then(repositories => {
    console.log(repositories);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');

    repositories.forEach(repo => {
        let project = document.createElement('li');
        project.innerText = repo.name;
        projectList.appendChild(project);
    });
  })
  .catch(error => console.error('Error fetching repositories:', error));

