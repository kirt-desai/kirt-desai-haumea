let today = new Date();

let thisYear = today.getFullYear();

let footer = document.createElement('footer');
console.log(footer)
let copyright = document.createElement('p');
console.log(copyright)
copyright.innerHTML = `© YourName ${thisYear}`;
console.log(copyright)
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"];
const skillsSection = document.getElementById("skillsSection");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const body = document.querySelector('body'); 
const footerChild = body.querySelector('myFooter');
body.appendChild(myFooter); 
