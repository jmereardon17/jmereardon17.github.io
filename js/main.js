const portfolioList = document.querySelector('.portfolio');
let latestProjects = [];

const displayPortfolio = (portfolio, items) => {
  for (let i = 0; i < items; i += 1) {
    const li = document.createElement('li');
    li.className = 'portfolio__item';
    const container = document.createElement('div');
    container.className = 'portfolio__container';
    const portfolioImage = document.createElement('div');
    portfolioImage.className = `portfolio__img`;
    portfolioImage.style.backgroundImage = `url('../img/portfolio/${portfolio[i].image}')`;
    portfolioImage.style.backgroundRepeat = 'no-repeat';
    const overlay = document.createElement('div');
    overlay.className = 'portfolio__overlay';
    const h3 = document.createElement('h3');
    h3.className = 'portfolio__name';
    h3.textContent = portfolio[i].name;
    const h4 = document.createElement('h4');
    h4.className = 'portfolio__type';
    h4.textContent = portfolio[i].type;
    const p = document.createElement('p');
    p.className = 'portfolio__desc';
    p.textContent = portfolio[i].desc;
    const linksDiv = document.createElement('div');
    linksDiv.style = 'width: 100%; margin-top: auto';
    const gitLink = document.createElement('a');
    gitLink.className = 'portfolio__link';
    gitLink.href = portfolio[i].github;
    gitLink.target = '_blank';
    gitLink.textContent = 'View Details';
    linksDiv.appendChild(gitLink);
    if (portfolio[i].liveView !== false) {
      const liveLink = document.createElement('a');
      liveLink.className = 'portfolio__link';
      liveLink.href = portfolio[i].liveView;
      liveLink.target = '_blank';
      liveLink.textContent = 'Live View';
      linksDiv.appendChild(liveLink);
    }
    overlay.appendChild(h3);
    overlay.appendChild(h4);
    overlay.appendChild(p);
    overlay.appendChild(linksDiv);
    container.appendChild(portfolioImage);
    container.appendChild(overlay);
    li.appendChild(container);
    portfolioList.appendChild(li);
  }
}

const getLatestProjects = arr => {
  latestProjects = arr.slice(Math.max(arr.length - 4, 1));
  latestProjects.reverse();
  return latestProjects;
};

// getLatestProjects(projects);
// displayPortfolio(latestProjects, 4);