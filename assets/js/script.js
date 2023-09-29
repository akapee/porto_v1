const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});


// TYPING TEXT
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Junior Mobile Developer", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//FILTERTABS SKILLS
const skillsBtn = document.querySelectorAll('.skillsTab-btn');
const skillItem = document.querySelectorAll('.cards_item_skills');

let activeBtn = "language";

showSkillsItem(activeBtn);

skillsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showSkillsItem(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    skillsBtn.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showSkillsItem(newMenuBtn){
    activeBtn = newMenuBtn;
    skillItem.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}



// FILTERTABS PROJECTS
const projectsBtn = document.querySelectorAll('.projectsTab-btn');
const projectsItem = document.querySelectorAll('.cards_item_projects');

let activeBtns = "website";

showProjectsItem(activeBtns);

projectsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showProjectsItem(btn.id);
        btn.classList.add('active-btns');
    });
});

function resetActiveBtn(){
    projectsBtn.forEach((btn) => {
        btn.classList.remove('active-btns');
    });
}

function showProjectsItem(newMenuBtn){
    activeBtns = newMenuBtn;
    projectsItem.forEach((item) => {
        if(item.classList.contains(activeBtns)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}



