const projects = [
  {
    name: 'Personal Profile Page',
    type: 'Techdegree',
    info: 'Customized a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets.',
    skills: 'HTML, CSS',
    image: 'project-1.png',
    github: 'https://github.com/jmereardon17/techdegree-project-1',
    liveView: '/techdegree-project-1'
  },
  {
    name: 'Responsive Layout',
    type: 'Techdegree',
    info: 'Developed a mobile-first webpage layout that adjusts to fit standard devices using HTML, CSS, and responsive design.',
    skills: 'HTML, CSS Floats',
    image: 'project-2.png',
    github: 'https://github.com/jmereardon17/techdegree-project-2',
    liveView: '/techdegree-project-2'
  },
  {
    name: 'Online Registration Form',
    type: 'Techdegree',
    info: 'Developed a responsive, mobile-first registration form using a variety of HTML form elements.',
    skills: 'HTML, CSS Flexbox',
    image: 'project-3.png',
    github: 'https://github.com/jmereardon17/techdegree-project-3',
    liveView: '/techdegree-project-3'
  },
  {
    name: 'Web Style Guide',
    type: 'Techdegree',
    info: 'Built a style guide that can act as a personal custom Bootstrap that can be dropped into any project to speed up development in general.',
    skills: 'Sass',
    image: 'project-4.png',
    github: 'https://github.com/jmereardon17/techdegree-project-4',
    liveView: '/techdegree-project-4'
  },
  {
    name: 'HSolutions',
    type: 'Freelance',
    info: 'Developed and designed a responsive business webpage for the company HSolutions, as part of freelance work.',
    skills: 'HTML, CSS, Bootstrap',
    image: 'project-5.png',
    github: 'https://github.com/jmereardon17/hsolutions-responsive-business-page',
    liveView: 'http://hsolutions.uk'
  },
  {
    name: 'Randomized Quiz Game',
    type: 'JavaScript Project',
    info: 'Developed a Star Wars themed randomized quiz game using JavaScript.',
    skills: 'JavaScript, jQuery, Sass, CSS Flexbox',
    image: 'project-10.png',
    github: 'https://github.com/jmereardon17/star-wars-randomized-quiz',
    liveView: '/star-wars-randomized-quiz'
  },
  {
    name: 'Interactive Photo Gallery',
    type: 'Techdegree',
    info: 'Developed an interactive, searchable gallery of photos using JavaScript and jQuery.',
    skills: 'HTML, Sass, JavaScript, jQuery',
    image: 'project-6.png',
    github: 'https://github.com/jmereardon17/techdegree-project-5',
    liveView: '/techdegree-project-5'
  },
  {
    name: 'Game Show App',
    type: 'Techdegree',
    info: 'Developed a browser word guessing game using JavaScript to randomize a phrase that players can try to guess.',
    skills: 'JavaScript, jQuery, CSS',
    image: 'project-7.png',
    github: 'https://github.com/jmereardon17/techdegree-project-6',
    liveView: '/techdegree-project-6'
  },
  {
    name: 'WebApp Dashboard',
    type: 'Techdegree',
    info: 'Built an interactive web application using supplied SVG icons and JavaScript-driven charts and graphs.',
    skills: 'JavaScript, jQuery, SVG, Sass, CSS Grid',
    image: 'project-8.png',
    github: 'https://github.com/jmereardon17/techdegree-project-7',
    liveView: '/techdegree-project-7'
  },
  {
    name: 'API Employee Directory',
    type: 'Techdegree',
    info: 'Developed an employee directory that displays 12 random "employee" data by communicating with a third-party API.',
    skills: 'JavaScript, Sass, CSS Grid, CSS Flexbox, HTML',
    image: 'project-9.png',
    github: 'https://github.com/jmereardon17/techdegree-project-8',
    liveView: '/techdegree-project-8'
  },
  {
    name: 'React Book Finder App',
    type: 'React Project',
    info: 'Built a React Book finder app that fetches an API request from the Google Books API based on the users search.',
    skills: 'HTML, CSS, JavaScript, React, Bootstrap',
    image: 'project-11.png',
    github: 'https://github.com/jmereardon17/react-book-finder-app',
    liveView: '/react-book-finder-app'
  }
];

const intro = `<p>Hi there! Thanks for visiting my profile, I'm a Front-End Web Developer from Liverpool who loves technology. I have been a web developer since 2018, where I studied a techdegree with <a class="link" href="https://teamtreehouse.com" target="_blank">Treehouse</a>. Click the arrow below to find out more about me.</p>`;

const about = `
  <p>I’m a tech enthusiast living in England, Liverpool. I spend my days learning and coding in Front End development for the web. I got my hands on my first computer when I was 13 where I spent most of my time on the internet, socializing with people from all over the world.</p>

  <p>Because of my strong interest in computing, I started to gain an interest in web development. I was very fascinated by how a webpage was built. From then on, I started to self teach myself how to code websites.</p>

  <p>After having basic understanding concepts on how to code a webpage, I felt that the content that was available at the time wasn't enough for me to fully understand and grasp the concepts. I moved away from web development altogether and put my focus elsewhere.</p>

  <p>Although this happened, occasionally something kept pulling me back to it and I would code webpages again. In 2018 I found <a class="link" href="https://teamtreehouse.com" target="_blank">Treehouse</a> where I began learning through their courses on web development. I picked up the Front End Web Development techdegree program in 2019, which I went on to complete in 2020. Upon graduation, I was offered a contract to work for Treehouse by becoming a techdegree Mentor/Code Reviewer.</p>

  <p>In my spare time, keeping pro-active and productive is a keen action I like to take, therefore I regularly enjoy keeping fit. I love and have a very strong interest in traveling which I like to go site-seeing around the world.</p>
  `;