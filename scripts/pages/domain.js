import { createPageShell, createSection } from '../components.js';

const sections = [
  ['Literature Survey', 'Existing studies highlight increased adoption of intelligent systems for decision support, but many solutions remain domain-limited and difficult to generalize.'],
  ['Research Gap', 'Current approaches often struggle with explainability, scalability, and standardized evaluation. This creates a gap between prototype solutions and practical adoption.'],
  ['Research Problem', 'How can we design a reliable, transparent, and scalable framework that supports research teams in producing high-quality outcomes while reducing manual effort?'],
  ['Objectives', 'Define measurable goals, design a modular architecture, validate effectiveness with real-world scenarios, and evaluate usability and maintainability.'],
  ['Methodology', 'Our methodology combines requirement analysis, iterative prototyping, model-driven development, and continuous validation using stakeholder feedback and benchmark metrics.'],
  ['Technologies', 'HTML5, CSS3, JavaScript modules, responsive layouts with Flexbox/Grid, and modern browser APIs for interactive user experience.']
];

createPageShell('domain', (main) => {
  sections.forEach(([title, body]) => {
    main.append(createSection(title, body));
  });
});
