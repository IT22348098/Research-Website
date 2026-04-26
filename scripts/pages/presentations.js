import { createCard, createPageShell, createSection } from '../components.js';

const slides = [
  { title: 'Proposal Presentation', description: 'Slides covering motivation, problem statement, and planned milestones.', linkText: 'View Slides', linkUrl: '#' },
  { title: 'Progress Presentation', description: 'Mid-project update slides with architecture, implementation, and metrics.', linkText: 'View Slides', linkUrl: '#' },
  { title: 'Final Presentation', description: 'Final defense slides including outcomes, limitations, and future work.', linkText: 'View Slides', linkUrl: '#' }
];

createPageShell('presentations', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  slides.forEach((slide) => grid.append(createCard(slide)));
  main.append(createSection('Presentations', grid));
});
