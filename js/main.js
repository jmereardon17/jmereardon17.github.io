const nav = document.querySelector('nav');
const mobileNavIcon = document.querySelector('.nav__item--hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const headline = document.querySelector('h1');
const tagline = document.querySelector('h2');
const headerButton = document.querySelector('.btn--work');
const aboutLink = document.getElementById('aboutLink');
const portfolioLink = document.getElementById('portfolioLink');
const contactLink = document.getElementById('contactLink');
const main = document.querySelector('main');
const aboutSection = document.getElementById('about');
const arrowRight = document.querySelector('.arrow--right');
const arrowLeft = document.querySelector('.arrow--left');
const aboutCard = document.querySelector('.about-card');
const recentWorkList = document.querySelector('.recent-work');
const projectOverlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const portfolioButton = document.querySelector('.btn--all-projects');
const portfolioList = document.querySelector('.portfolio');
const skills = document.querySelectorAll('.skills__item');
let latestProjects = [];

/* ==============================================
  HELPER FUNCTIONS
================================================ */

const generatePortfolio = () => {
  for (let i = 0; i < projects.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'portfolio__item';
    const container = document.createElement('div');
    container.className = 'project';
    const projectImage = document.createElement('div');
    projectImage.className = `project__image animated fadeIn`;
    projectImage.style.backgroundImage = `url('../img/portfolio/${projects[i].image}')`;
    projectImage.style.backgroundRepeat = 'no-repeat';
    container.appendChild(projectImage);
    const projectDetailsDiv = document.createElement('div');
    projectDetailsDiv.className = 'project__overlay';
    const projectName = document.createElement('h3');
    projectName.className = 'project__name';
    projectName.textContent = `${projects[i].name}`;
    projectDetailsDiv.appendChild(projectName);
    // const projectType = document.createElement('h4');
    // projectType.className = 'project__type';
    // projectType.textContent = `${projects[i].type}`;
    // projectDetailsDiv.appendChild(projectType);
    const projectInfo = document.createElement('p');
    projectInfo.className = 'project__info';
    projectInfo.textContent = `${projects[i].info}`;
    projectDetailsDiv.appendChild(projectInfo);
    const projectSkills = document.createElement('p');
    projectSkills.className = 'project__skills';
    projectSkills.textContent = `Skills/technologies used: ${projects[i].skills}`;
    projectDetailsDiv.appendChild(projectSkills);
    const projectLinks = document.createElement('div');
    projectLinks.className = 'project__links';
    const githubLink = document.createElement('a');
    githubLink.className = 'btn project__link';
    githubLink.textContent = 'GitHub';
    githubLink.href = `${projects[i].github}`;
    githubLink.target = '_blank';
    projectLinks.appendChild(githubLink);
    const viewFullLink = document.createElement('a');
    viewFullLink.className = 'btn project__link';
    viewFullLink.textContent = 'View Full';
    projectLinks.appendChild(viewFullLink);
    if (projects[i].liveView !== false) {
      const liveLink = document.createElement('a');
      liveLink.className = 'btn project__link';
      liveLink.textContent = 'Demo';
      liveLink.href = `${projects[i].liveView}`;
      liveLink.target = '_blank';
      projectLinks.removeChild(viewFullLink);
      projectLinks.appendChild(liveLink);
    }
    projectDetailsDiv.appendChild(projectLinks);
    container.appendChild(projectDetailsDiv);
    li.appendChild(container);
    portfolioList.appendChild(li);
  }
}

const getLatestProjects = arr => {
  latestProjects = arr.slice(Math.max(arr.length - 4, 1));
  latestProjects.reverse();

  for (let i=0; i<latestProjects.length; i+=1) {
    const li = document.createElement('li');
    li.className = 'recent-work__item';
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    const projectImage = document.createElement('div');
    projectImage.className = 'project__image';
    projectImage.style.backgroundImage = `url(../../../img/portfolio/${latestProjects[i].image})`;
    const projectDetails = document.createElement('div');
    projectDetails.className = 'project__details';
    const projectName = document.createElement('h3');
    projectName.className = 'project__name';
    projectName.textContent = `${latestProjects[i].name}`;
    projectDetails.appendChild(projectName);
    // const projectType = document.createElement('h4');
    // projectType.className = 'project__type';
    // projectType.textContent = `${latestProjects[i].type}`;
    // projectDetails.appendChild(projectType);
    const projectInfo = document.createElement('p');
    projectInfo.className = 'project__info';
    projectInfo.textContent = `${latestProjects[i].info}`;
    projectDetails.appendChild(projectInfo);
    const projectSkills = document.createElement('p');
    projectSkills.className = 'project__skills';
    projectSkills.textContent = `Skills/technologies used: ${latestProjects[i].skills}`;
    projectDetails.appendChild(projectSkills);
    const projectLinks = document.createElement('div');
    projectLinks.className = 'project__links';
    const githubLink = document.createElement('a');
    githubLink.className = 'btn project__link';
    githubLink.textContent = 'GitHub';
    githubLink.href = `${latestProjects[i].github}`;
    githubLink.target = '_blank';
    projectLinks.appendChild(githubLink);
    if (latestProjects[i].liveView !== false) {
      const liveLink = document.createElement('a');
      liveLink.className = 'btn project__link';
      liveLink.textContent = 'Demo';
      liveLink.href = `${latestProjects[i].liveView}`;
      liveLink.target = '_blank';
      projectLinks.appendChild(liveLink);
    }
    projectDetails.appendChild(projectLinks);
    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectDetails);
    li.appendChild(projectDiv);
    recentWorkList.appendChild(li);
  }
};

const toggleElementStyles = scrollPos => {
  if (scrollPos >= 95) {
    headline.style.opacity = '0';
  } else {
    headline.style.opacity = '1';
  }
  if (scrollPos >= 155) {
    tagline.style.opacity = '0';
  } else {
    tagline.style.opacity = '1';
  }
  if (scrollPos >= 265) {
    headerButton.style.opacity = '0';
  } else {
    headerButton.style.opacity = '1';
  }
  if (scrollPos >= 550) {
    nav.style.borderBottom = '6px solid #99b898';
  } else {
    nav.style.borderBottom = 'none';
  }
  if (scrollPos >= 2413) {
    let delay = 0;
    for (let i = 0; i < skills.length; i += 1) {
      delay += 0.5;
      skills[i].classList.add('fadeIn');
      skills[i].style.animationDelay = `${delay}s`;
    }
  }
}

const toggleAbout = () => {
  let title = aboutCard.querySelector('h3');
  let content = aboutCard.querySelector('.about-card__content');
  if (title.textContent === 'About Me') {
    $(aboutCard).fadeOut(function(){
      title.textContent = 'My Journey as a Web Developer';
      content.innerHTML = `
        <img src="../icons/macbook.svg" alt="MacBook SVG Icon" class="macbook">
        <img src="../icons/html-icon.svg" alt="HTML SVG Icon" class="html-icon">
        <img src="../icons/css-icon.svg" alt="CSS SVG Icon" class="css-icon">
        <img src="../icons/js-icon.svg" alt="JS SVG Icon" class="js-icon">
        ${about}
      `;
    });
    arrowRight.style = 'transform: translateX(300vh); opacity: 0';
    window.setTimeout( () => {
      arrowRight.style.display = 'none';
    }, 100);
    arrowLeft.style = 'transform: translateX(0); opacity: 1';
    $(arrowLeft).show();
    $(aboutCard).fadeIn();
  } else {
    $(aboutCard).fadeOut(function(){
      title.textContent = 'About Me';
      content.innerHTML = intro;
    });
    arrowRight.style = 'transform: translateX(0); opacity: 1';
    arrowLeft.style = 'transform: translateX(-300vh); opacity: 0';
    $(aboutCard).fadeIn();
  }
}

const displayOverlay = projectItem => {
  modal.style.backgroundImage = `url(../../../img/portfolio/project-${projectItem}.png)`;
  modal.innerHTML = '<span class="close-icon">&times;</span>'
  projectOverlay.classList.remove('hidden');
  projectOverlay.classList.remove('flipOutY');
  projectOverlay.classList.add('flipInY');
  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    projectOverlay.classList.remove('flipInY');
    projectOverlay.classList.add('flipOutY');
    window.setTimeout( () => {
      projectOverlay.classList.add('hidden');
    },800);
  });
}

const togglePortfolio = () => {
  if (portfolioList.classList.contains('hidden')) {
    portfolioList.classList.remove('hidden');
    portfolioButton.textContent = 'Hide All';
  } else {
    portfolioList.classList.add('hidden');
    portfolioButton.textContent = 'View All';
  }
}

getLatestProjects(projects);
generatePortfolio();

/* ==============================================
  EVENT LISTENERS
================================================ */

window.onload = () => {
  const portfolioProjects = portfolioList.querySelectorAll('.project__image');
  let delay = 0;
  for (let i=0; i<portfolioProjects.length; i+=1) {
    delay += .5;
    portfolioProjects[i].style.animationDelay = `${delay}s`;
  }
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach(item => {
    item.addEventListener('click', e => {
      let projectType = item.parentNode.parentNode;
      let image = item.firstElementChild;
      if (projectType.className === 'recent-work' && e.target === image || e.target.textContent === 'View Full') {
        let imageURL = image.getAttribute('style');
        let getProjectNo = imageURL.match(/-\d+/);
        let projectNo = parseInt(getProjectNo[0].replace(/-/, ''));
        displayOverlay(projectNo);
      }
    });
  });
}

window.addEventListener('scroll', () => {
  let wS = window.scrollY;
  toggleElementStyles(wS);
});

mobileNavIcon.addEventListener('click', () => {
  if (mobileNav.classList.contains('hidden')) {
    mobileNav.classList.remove('hidden');
    mobileNav.classList.remove('fadeOutUp');
  } else {
    mobileNav.classList.add('fadeOutUp');
    window.setTimeout( () => {
      mobileNav.classList.add('hidden');
    },400);
  }
});

mobileNav.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link--mobile')) {
    mobileNav.classList.add('hidden');
  }
});

arrowRight.addEventListener('click', toggleAbout);
arrowLeft.addEventListener('click', toggleAbout);

portfolioButton.addEventListener('click', togglePortfolio);