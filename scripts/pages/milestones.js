import { createMilestone, createPageShell, createSection } from '../components.js';

const milestoneData = [
  { title: 'Project Proposal', date: '2026-01-10', marks: '10%', details: 'Initial concept presentation, problem definition, and project planning with supervisor feedback.' },
  { title: 'Progress Presentation 1', date: '2026-02-18', marks: '15%', details: 'Demonstration of literature findings, architecture draft, and early prototype results.' },
  { title: 'Progress Presentation 2', date: '2026-03-25', marks: '20%', details: 'Feature-complete implementation progress, testing evidence, and risk mitigation updates.' },
  { title: 'Final Assessment', date: '2026-04-20', marks: '30%', details: 'Final solution demonstration, evaluation outcomes, and defense of project contributions.' }
];

createPageShell('milestones', (main) => {
  const wrapper = document.createElement('div');
  milestoneData.forEach((item) => wrapper.append(createMilestone(item)));
  main.append(createSection('Project Milestones', wrapper));
});
