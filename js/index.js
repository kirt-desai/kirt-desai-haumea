

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.createElement('footer');
console.log(footer);
let copyright = document.createElement('p');
console.log(copyright);
copyright.innerHTML = `© YourName ${thisYear}`;
console.log(copyright);
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {

     event.preventDefault();
    const usersName = event.target.usersName.value;
    const userEmail = event.target.userEmail.value;
    const messageContent = event.target.messageContent.value;
   
    console.log('Name', userName);
    console.log('Email:', userEmail);
    console.log('Message', userMessage);

    let messageSection = document.querySelector('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${usersName}</a> <span>${messageContent}</span>`;
    
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', function() {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

    return false;
});


fetch('https://api.github.com/users/{kirt_desai}/repos')
  .then(response => response.json())
  .then(data => {
    const repositories = JSON.parse(data);
    console.log(repositories);
  })
  .catch(error => console.error('Error fetching repositories:', error));

let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}

