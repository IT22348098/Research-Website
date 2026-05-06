import { createCard, createPageShell, createSection } from '../components.js';

const members = [
  {
    title: 'MNM Afham',
    id: 'IT22348098',
    email: 'IT22348098@my.sliit.lk',
    phone: '0787880906',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFabQ4FitkhHw/profile-displayphoto-scale_400_400/B56ZnoRaxFIsAg-/0/1760538515516?e=1779321600&v=beta&t=uwsSljmsbnGjwLBk939hvhYgiuBb996GSY5iLD2DWOE'
  },
  {
    title: 'Jeethuka Thayakaran',
    id: 'IT22921994',
    email: 'IT22921994@my.sliit.lk',
    phone: '076 881 5480',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQH5SL_86iUsuw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1716265841055?e=1778594400&v=beta&t=iCIyNoOtTuDQ0Gpi8FnB_w0VsS2mPTT6zvnTTyvP2Io'
  },
  {
    title: 'Aadhil M.A.M',
    id: 'IT22920454',
    email: 'IT22920454@my.sliit.lk',
    phone: '076 716 5119',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEpk498CZAhKw/profile-displayphoto-scale_400_400/B56ZqgK6tnIYAg-/0/1763623808910?e=1779321600&v=beta&t=LXtydIfA7nfCXGGX0c8pv91INcimC9EE0pQrnoIWYuY'
  },
  {
    title: 'Husny A.N.M',
    id: 'IT22314192',
    email: 'IT22314192@my.sliit.lk',
    phone: '076 012 7625',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHdI_8LliG-zg/profile-displayphoto-shrink_400_400/B56ZScvksyGsAg-/0/1737796505367?e=1779321600&v=beta&t=FsaoDSIwXgZygKEbVDQVKG5P6qY4UhL9Qgh3p7V5cTA'
  },
  {
    title: 'Ms. Karthiga Rajendran',
    role: 'Supervisor',
    email: 'Karthiga.r@my.sliit.lk',
    image: 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg'
  },
  {
    title: 'Dr. Kalpani Manathunga',
    role: 'Co-Supervisor',
    email: 'kalpani.m@sliit.lk',
    image: 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg'
  }
];

function buildMemberDescription({ id, email, phone, role }) {
  const container = document.createElement('span');

  const appendPart = (part) => {
    if (!part) {
      return;
    }

    if (container.childNodes.length > 0) {
      container.append(' | ');
    }

    container.append(part);
  };

  if (role) {
    appendPart(role);
  } else {
    appendPart(id);
  }

  if (email) {
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    appendPart(emailLink);
  }

  appendPart(phone);
  return container;
}

createPageShell('about', (main) => {
  const grid = document.createElement('div');
  grid.className = 'grid';
  members.forEach((member) => {
    grid.append(
      createCard({
        title: member.title,
        description: buildMemberDescription(member),
        image: member.image
      })
    );
  });
  main.append(createSection('About Our Team', grid));
});
