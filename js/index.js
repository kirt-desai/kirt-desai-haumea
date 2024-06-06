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
    const usersName = event.target.usersName.value;
    const userEmail = event.target.userEmail.value;
    const messageContent = event.target.messageContent.value;

    console.log(usersName, userEmail, messageContent);
    event.preventDefault();

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

