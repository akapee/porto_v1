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


// FILTERTABS PROJECTS



