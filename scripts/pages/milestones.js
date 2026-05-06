import { createMilestone, createPageShell, createSection } from '../components.js';

const milestoneData = [
  {
    title: 'Project Proposal',
    date: '2026-01-10',
    marks: '6%',
    details: 'Initial concept presentation, problem definition, project planning, and supervisor feedback.'
  },
  {
    title: 'Progress Presentation 1',
    date: '2026-02-08',
    marks: '15%',
    details: 'Demonstration of literature findings, proposed system architecture, and early prototype results.'
  },
  {
    title: 'Progress Presentation 2',
    date: '2026-03-11',
    marks: '18%',
    details: 'Feature-complete implementation progress, testing evidence, system integration, and risk mitigation updates.'
  },
  {
    title: 'Research Paper Draft',
    date: '2026-02-15',
    marks: 'N/A',
    details: 'Draft paper submitted covering background, methodology, implementation approach, and initial research findings.'
  },
  {
    title: 'Thesis / Final Report Submission',
    date: '2026-03-30',
    marks: 'N/A',
    details: 'Complete research report submitted with methodology, experiments, evaluation results, and final system architecture.'
  },
  {
    title: 'Website Assessment',
    date: '2026-05-01',
    marks: 'N/A',
    details: 'Research website, documentation artifacts, project pages, and supporting materials reviewed.'
  },
  {
    title: 'Final Assessment',
    date: '2026-05-06',
    marks: '10%',
    details: 'Final solution demonstration, evaluation outcomes, and defense of project contributions.'
  }
];

createPageShell('milestones', (main) => {

  const milestoneWrapper = document.createElement('div');

  milestoneWrapper.style.display = 'grid';
  milestoneWrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
  milestoneWrapper.style.gap = '24px';
  milestoneWrapper.style.marginTop = '20px';

  milestoneData.forEach((item) => {

    const card = document.createElement('div');

    card.className = 'card';

    card.style.padding = '28px';
    card.style.borderRadius = '24px';
    card.style.background = '#f8fafc';
    card.style.border = '1px solid #dbe2ea';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
    card.style.transition = '0.3s ease';

    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
    });

    const title = document.createElement('h3');
    title.textContent = item.title;
    title.style.color = '#1f4f82';
    title.style.fontSize = '1.5rem';
    title.style.marginBottom = '14px';

    const meta = document.createElement('div');
    meta.style.marginBottom = '18px';
    meta.style.fontWeight = '600';
    meta.style.color = '#475569';

    meta.innerHTML = `
      <div><strong>Date:</strong> ${item.date}</div>
      <div><strong>Marks:</strong> ${item.marks}</div>
    `;

    const details = document.createElement('p');
    details.textContent = item.details;
    details.style.lineHeight = '1.8';
    details.style.color = '#0f172a';

    card.append(title, meta, details);

    milestoneWrapper.append(card);

  });

  const section = createSection('Project Milestones', milestoneWrapper);

  main.append(section);

});