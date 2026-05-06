import { createCard, createPageShell, createSection } from '../components.js';

const members = [ 
  { 
    title: 'MNM Afham', 
    description: 'IT22348098 | <a href="mailto:IT22348098@my.sliit.lk">IT22348098@my.sliit.lk</a> | 0787880906', 
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFabQ4FitkhHw/profile-displayphoto-scale_400_400/B56ZnoRaxFIsAg-/0/1760538515516?e=1779321600&v=beta&t=uwsSljmsbnGjwLBk939hvhYgiuBb996GSY5iLD2DWOE' 
  },
  { 
    title: 'Jeethuka Thayakaran', 
    description: 'IT22921994 | <a href="mailto:IT22921994@my.sliit.lk">IT22921994@my.sliit.lk</a> | 076 881 5480', 
    image: 'https://media.licdn.com/dms/image/v2/D5635AQH5SL_86iUsuw/profile-framedphoto-shrink_400_400/0/1716265841055?e=1778594400&v=beta&t=iCIyNoOtTuDQ0Gpi8FnB_w0VsS2mPTT6zvnTTyvP2Io' 
  },
  { 
    title: 'Aadhil M.A.M', 
    description: 'IT22920454 | <a href="mailto:IT22920454@my.sliit.lk">IT22920454@my.sliit.lk</a> | 076 716 5119', 
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEpk498CZAhKw/profile-displayphoto-scale_400_400/B56ZqgK6tnIYAg-/0/1763623808910?e=1779321600&v=beta&t=LXtydIfA7nfCXGGX0c8pv91INcimC9EE0pQrnoIWYuY' 
  },
  { 
    title: 'Husny A.N.M', 
    description: 'IT22314192 | <a href="mailto:IT22314192@my.sliit.lk">IT22314192@my.sliit.lk</a> | 076 012 7625', 
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHdI_8LliG-zg/profile-displayphoto-shrink_400_400/B56ZScvksyGsAg-/0/1737796505367?e=1779321600&v=beta&t=FsaoDSIwXgZygKEbVDQVKG5P6qY4UhL9Qgh3p7V5cTA' 
  },
  { 
    title: 'Ms. Karthiga Rajendran', 
    description: 'Supervisor | <a href="mailto:Karthiga.r@sliit.lk">Karthiga.r@sliit.lk</a>', 
    image: 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg' 
  },
  { 
    title: 'Dr. Kalpani Manathunga', 
    description: 'Co-Supervisor | <a href="mailto:kalpani.m@sliit.lk">kalpani.m@sliit.lk</a>', 
    image: 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg' 
  }
];

createPageShell('about', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  members.forEach((member) => grid.append(createCard(member)));
  main.append(createSection('About Our Team', grid));
});
