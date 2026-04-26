import { createCard, createPageShell, createSection } from '../components.js';

const members = [
  { title: 'A. Perera', description: 'Team Lead - Research design, architecture planning, and milestone coordination.', image: 'https://picsum.photos/seed/member1/500/300' },
  { title: 'S. Fernando', description: 'ML Engineer - Model development, training pipeline, and evaluation strategy.', image: 'https://picsum.photos/seed/member2/500/300' },
  { title: 'D. Silva', description: 'Frontend Developer - UI component design and responsive implementation.', image: 'https://picsum.photos/seed/member3/500/300' },
  { title: 'M. Jayasuriya', description: 'QA & Documentation - Testing workflows, reports, and presentation preparation.', image: 'https://picsum.photos/seed/member4/500/300' }
];

createPageShell('about', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  members.forEach((member) => grid.append(createCard(member)));
  main.append(createSection('About Our Team', grid));
});
