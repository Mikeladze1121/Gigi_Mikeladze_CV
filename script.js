function hideAll(){
document.getElementById("about").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("projects").style.display="none";
}

function showAbout(){
hideAll();
document.getElementById("about").style.display="block";
}

function showSkills(){
hideAll();
document.getElementById("skills").style.display="flex";
}

function showProjects(){
hideAll();
document.getElementById("projects").style.display="block";
}

const translations={

en:{
title:"Hello, I am <span>Gigi Mikeladze</span>",
job:"IT Support / Network & Systems",
desc:"Third-year Computer Science student at Caucasus University.",
phone: "Phone: 558 55 10 45",
email: "Email: g_mikeladze3@cu.edu.ge",
birth: "Date of birth: 08/07/2005",
location: "Location: Tbilisi",


about:`Hello,my name is Gigi Mikeladze.I am a third year computer science student at Caucasus University.I am a responsible and a motivated person. I always worked hard and I tried to better myself since childhood.I am a gold medalist and my GPA is more than 3.8.

I love IT field and I am very interested in that.I enjoy learning new technologies and using them for practice. I have experience of IT Support and system administration.They are both windows and linux operating systems. I have experience of building computer and fixing computer problems, building computer for small office and monitoring computer systems.

I had a small business which I build the computer and set the computer in some small office. I have also worked on network devices in real environments. I have small projects in packet tracer. In this project I managed VLAN, DHCP, Static routing, EIGRP and OSPF. I also know the basics of BGP.

I know some programming languages like C, C++, C#, python, html, css, javascript. I have experience for object oriented programming in C# and I know some concepts of inheritance, abstraction and polymorphism.

Also I have done a digital marketing course. I am having knowledge in Facebook Ads, Google Ads, SEO, and Email Marketing. I have basic Understanding in MySQL.

Besides university I have also done an IT Support course at IT Step Academy and earned a certificate.

Thank you for considering my application. I hope you will find my knowledge and experience useful for your company.`,

aboutBtn:"About Me",
skillsBtn:"Skills",
projectsBtn:"Projects",
projTitle:"Projects",
projDesc:"My GitHub projects and practical works will be displayed here.",
github:"GitHub Profile"
}

};

function setLang(lang){

if(lang==="ka"){
location.reload();
return;
}

document.getElementById("title").innerHTML=translations.en.title;
document.getElementById("job").innerText=translations.en.job;
document.getElementById("shortDesc").innerText=translations.en.desc;
document.getElementById("aboutText").innerText=translations.en.about;
document.getElementById("btnAbout").innerText=translations.en.aboutBtn;
document.getElementById("btnSkills").innerText=translations.en.skillsBtn;
document.getElementById("btnProjects").innerText=translations.en.projectsBtn;
document.getElementById("projectsTitle").innerText=translations.en.projTitle;
document.getElementById("projectsDesc").innerText=translations.en.projDesc;
document.getElementById("githubLink").innerText=translations.en.github;
document.getElementById("phone").innerHTML =
    `<i class="fas fa-phone"></i> ${translations.en.phone}`;

document.getElementById("email").innerHTML =
    `<i class="fas fa-envelope"></i> ${translations.en.email}`;

document.getElementById("birth").innerHTML =
    `<i class="fas fa-calendar"></i> ${translations.en.birth}`;

document.getElementById("location").innerHTML =
    `<i class="fas fa-location-dot"></i> ${translations.en.location}`;

}
