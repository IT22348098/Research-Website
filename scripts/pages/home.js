import { createHero, createPageShell, createSection } from '../components.js';

createPageShell('home', (main) => {
  main.append(
    createHero({
      title: 'AI-Driven Research Insights Platform',
      description:
        'Explore our research domain, key milestones, deliverables, and team insights through a modular and responsive project website.',
      buttonText: 'View Milestones',
      buttonLink: 'pages/milestones.html'
    }),
    createSection(
      'Introduction',
      'This project investigates modern research workflows and delivers a structured platform to present literature, identified gaps, project objectives, technical methodology, and deliverables.'
    )
  );
});
