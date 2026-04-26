import { createCard, createPageShell, createSection } from '../components.js';

const members = [ 
  { 
    title: 'MNM Afham', 
    description: 'IT22348098 | IT22348098@my.sliit.lk | 0787880906', 
    image: 'https://picsum.photos/seed/afham/500/300' 
  },
  { 
    title: 'Jeethuka Thayakaran', 
    description: 'IT22921994 | IT22921994@my.sliit.lk | 076 881 5480', 
    image: 'https://picsum.photos/seed/jeethuka/500/300' 
  },
  { 
    title: 'Aadhil M.A.M', 
    description: 'IT22920454 | IT22920454@my.sliit.lk | 076 716 5119', 
    image: 'https://picsum.photos/seed/aadhil/500/300' 
  },
  { 
    title: 'Husny A.N.M', 
    description: 'IT22314192 | IT22314192@my.sliit.lk | 076 012 7625', 
    image: 'https://picsum.photos/seed/husny/500/300' 
  }
];

createPageShell('about', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  members.forEach((member) => grid.append(createCard(member)));
  main.append(createSection('About Our Team', grid));
});
