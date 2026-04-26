import { createCard, createPageShell, createSection } from '../components.js';

const documents = [
  { title: 'Project Charter', description: 'Foundational project scope, team roles, and expected outcomes.', linkText: 'Open Document', linkUrl: '#' },
  { title: 'Requirement Specification', description: 'Functional and non-functional requirements for the research platform.', linkText: 'Open Document', linkUrl: '#' },
  { title: 'Final Report', description: 'Complete analysis, implementation details, evaluation, and conclusions.', linkText: 'Open Document', linkUrl: '#' }
];

createPageShell('documents', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  documents.forEach((doc) => grid.append(createCard(doc)));
  main.append(createSection('Documents', grid));
});
