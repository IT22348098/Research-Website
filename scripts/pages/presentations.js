import { createCard, createPageShell, createSection } from '../components.js';

const slides = [
  {
    title: 'Proposal Presentation',
    description: 'Slides covering motivation, problem statement, and planned milestones.',
    linkText: 'View Slides',
    linkUrl: 'https://docs.google.com/presentation/d/15SAVr6KzjwXqNllZX4qQyI6Q4Gyx38-X/edit?usp=sharing&ouid=116064379739656065020&rtpof=true&sd=true'
  },

  {
    title: 'Progress Presentation 1',
    description: 'Mid-project update slides with architecture, implementation, and initial metrics.',
    linkText: 'View Slides',
    linkUrl: 'https://docs.google.com/presentation/d/1iPlfQoBtmCQSCo7VZB6TP9fY6DOi9r0B/edit?usp=sharing&ouid=116064379739656065020&rtpof=true&sd=true'
  },

  {
    title: 'Progress Presentation 2',
    description: 'Updated progress slides with improved results, system enhancements, and evaluation metrics.',
    linkText: 'View Slides',
    linkUrl: 'https://docs.google.com/presentation/d/1MvWCaPrzzi78F0-nMNO62kWIOOq557_d/edit?usp=sharing&ouid=116064379739656065020&rtpof=true&sd=true'
  },

  {
    title: 'Final Presentation',
    description: 'Final defense slides including outcomes, limitations, and future work.',
    linkText: 'View Slides',
    linkUrl: '#'
  }
];

createPageShell('presentations', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';

  slides.forEach((slide) => grid.append(createCard(slide)));

  main.append(createSection('Presentations', grid));
});