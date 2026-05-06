import { createPageShell } from '../components.js';

const milestoneData = [
  {
    title: 'Project Proposal',
    date: '2025-09-20',
    marks: '6%',
    details:
      'Initial concept presentation, problem definition, project planning, and supervisor feedback.',
    status: 'completed'
  },
  {
    title: 'Progress Presentation 1',
    date: '2026-01-08',
    marks: '15%',
    details:
      'Demonstration of literature findings, proposed system architecture, and early prototype results.',
    status: 'completed'
  },
  {
    title: 'Progress Presentation 2',
    date: '2026-03-11',
    marks: '18%',
    details:
      'Feature-complete implementation progress, testing evidence, system integration, and risk mitigation updates.',
    status: 'completed'
  },
  {
    title: 'Research Paper Draft',
    date: '2026-04-20',
    marks: 'N/A',
    details:
      'Draft paper submitted covering background, methodology, implementation approach, and initial research findings.',
    status: 'completed'
  },
  {
    title: 'Thesis / Final Report Submission',
    date: '2026-04-20',
    marks: 'N/A',
    details:
      'Complete research report submitted with methodology, experiments, evaluation results, and final system architecture.',
    status: 'completed'
  },
  {
    title: 'Website Assessment',
    date: '2026-05-03',
    marks: 'N/A',
    details:
      'Research website, documentation artifacts, project pages, and supporting materials reviewed.',
    status: 'ongoing'
  },
  {
    title: 'Final Assessment',
    date: '2026-05-06',
    marks: '10%',
    details:
      'Final solution demonstration, evaluation outcomes, and defense of project contributions.',
    status: 'pending'
  }
];

createPageShell('milestones', (main) => {

  const section = document.createElement('section');
  section.className = 'card';

  section.style.padding = '40px';
  section.style.marginTop = '24px';

  const heading = document.createElement('h2');
  heading.textContent = 'Project Milestones';

  heading.style.color = '#1f4f82';
  heading.style.fontSize = '2.3rem';
  heading.style.marginBottom = '50px';

  const timeline = document.createElement('div');

  timeline.style.position = 'relative';
  timeline.style.marginLeft = '20px';
  timeline.style.paddingLeft = '40px';

  // Vertical line
  const line = document.createElement('div');

  line.style.position = 'absolute';
  line.style.left = '12px';
  line.style.top = '0';
  line.style.bottom = '0';
  line.style.width = '4px';
  line.style.background =
    'linear-gradient(to bottom, #2f80ed, #19b8a6)';

  timeline.append(line);

  milestoneData.forEach((item) => {

    const milestone = document.createElement('div');

    milestone.style.position = 'relative';
    milestone.style.marginBottom = '42px';

    // Circle indicator
    const circle = document.createElement('div');

    circle.style.position = 'absolute';
    circle.style.left = '-36px';
    circle.style.top = '8px';
    circle.style.width = '24px';
    circle.style.height = '24px';
    circle.style.borderRadius = '50%';
    circle.style.border = '4px solid white';
    circle.style.boxShadow = '0 4px 10px rgba(0,0,0,0.12)';

    if (item.status === 'completed') {
      circle.style.background = '#10b981';
    } else if (item.status === 'ongoing') {
      circle.style.background = '#f59e0b';
    } else {
      circle.style.background = '#cbd5e1';
    }

    // Card
    const card = document.createElement('div');

    card.style.background = '#f8fafc';
    card.style.border = '1px solid #dbe2ea';
    card.style.borderRadius = '22px';
    card.style.padding = '26px';
    card.style.boxShadow = '0 6px 18px rgba(15,23,42,0.05)';
    card.style.transition = '0.3s ease';

    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 10px 26px rgba(15,23,42,0.09)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 6px 18px rgba(15,23,42,0.05)';
    });

    // Title
    const title = document.createElement('h3');

    title.textContent = item.title;

    title.style.color = '#0f172a';
    title.style.fontSize = '1.45rem';
    title.style.marginBottom = '14px';

    // Meta
    const meta = document.createElement('div');

    meta.style.display = 'flex';
    meta.style.flexWrap = 'wrap';
    meta.style.gap = '18px';
    meta.style.marginBottom = '16px';
    meta.style.color = '#475569';
    meta.style.fontWeight = '600';

    const date = document.createElement('span');
    date.textContent = `📅 ${item.date}`;

    const marks = document.createElement('span');
    marks.textContent = `🏆 ${item.marks}`;

    meta.append(date, marks);

    // Status badge
    const badge = document.createElement('span');

    badge.textContent =
      item.status.charAt(0).toUpperCase() + item.status.slice(1);

    badge.style.padding = '6px 14px';
    badge.style.borderRadius = '999px';
    badge.style.fontSize = '0.85rem';
    badge.style.fontWeight = '700';

    if (item.status === 'completed') {
      badge.style.background = '#dcfce7';
      badge.style.color = '#166534';
    } else if (item.status === 'ongoing') {
      badge.style.background = '#fef3c7';
      badge.style.color = '#92400e';
    } else {
      badge.style.background = '#e2e8f0';
      badge.style.color = '#475569';
    }

    meta.append(badge);

    // Details
    const details = document.createElement('p');

    details.textContent = item.details;

    details.style.lineHeight = '1.9';
    details.style.color = '#1e293b';
    details.style.fontSize = '1rem';

    card.append(title, meta, details);

    milestone.append(circle, card);

    timeline.append(milestone);

  });

  section.append(heading, timeline);

  main.append(section);

});