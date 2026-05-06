import { createPageShell } from '../components.js';

const members = [
  {
    title: 'MNM Afham',
    id: 'IT22348098',
    email: 'IT22348098@my.sliit.lk',
    phone: '0787880906',
    role: 'Team Member',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFabQ4FitkhHw/profile-displayphoto-scale_400_400/B56ZnoRaxFIsAg-/0/1760538515516?e=1779321600&v=beta&t=uwsSljmsbnGjwLBk939hvhYgiuBb996GSY5iLD2DWOE'
  },
  {
    title: 'Jeethuka Thayakaran',
    id: 'IT22921994',
    email: 'IT22921994@my.sliit.lk',
    phone: '076 881 5480',
    role: 'Team Member',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQH5SL_86iUsuw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1716265841055?e=1778594400&v=beta&t=iCIyNoOtTuDQ0Gpi8FnB_w0VsS2mPTT6zvnTTyvP2Io'
  },
  {
    title: 'Aadhil M.A.M',
    id: 'IT22920454',
    email: 'IT22920454@my.sliit.lk',
    phone: '076 716 5119',
    role: 'Team Member',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEpk498CZAhKw/profile-displayphoto-scale_400_400/B56ZqgK6tnIYAg-/0/1763623808910?e=1779321600&v=beta&t=LXtydIfA7nfCXGGX0c8pv91INcimC9EE0pQrnoIWYuY'
  },
  {
    title: 'Husny A.N.M',
    id: 'IT22314192',
    email: 'IT22314192@my.sliit.lk',
    phone: '076 012 7625',
    role: 'Team Member',
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

createPageShell('about', (main) => {
  const section = document.createElement('section');
  section.className = 'section';

  const heading = document.createElement('h2');
  heading.textContent = 'About Our Team';

  const intro = document.createElement('p');
  intro.textContent =
    'Meet the research team and supervisors behind the AI-Driven Diagnosis of Diabetic Patients from Medical Records project.';

  const grid = document.createElement('div');

  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  grid.style.gap = '28px';
  grid.style.marginTop = '32px';

  members.forEach((member) => {
    const card = document.createElement('article');

    card.style.background = '#f8fafc';
    card.style.border = '1px solid #dbe2ea';
    card.style.borderRadius = '26px';
    card.style.padding = '28px';
    card.style.textAlign = 'center';
    card.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.06)';
    card.style.transition = '0.3s ease';

    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-6px)';
      card.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.12)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.06)';
    });

    const imageWrapper = document.createElement('div');

    imageWrapper.style.width = '130px';
    imageWrapper.style.height = '130px';
    imageWrapper.style.margin = '0 auto 20px';
    imageWrapper.style.borderRadius = '50%';
    imageWrapper.style.padding = '4px';
    imageWrapper.style.background = 'linear-gradient(135deg, #1f4f82, #19b8a6)';

    const img = document.createElement('img');

    img.src = member.image;
    img.alt = member.title;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '50%';
    img.style.border = '4px solid #ffffff';

    imageWrapper.append(img);

    const title = document.createElement('h3');

    title.textContent = member.title;
    title.style.color = '#1f4f82';
    title.style.fontSize = '1.35rem';
    title.style.marginBottom = '8px';

    const role = document.createElement('span');

    role.textContent = member.role || 'Team Member';
    role.style.display = 'inline-block';
    role.style.padding = '6px 14px';
    role.style.borderRadius = '999px';
    role.style.background = '#eaf3ff';
    role.style.color = '#1f4f82';
    role.style.fontWeight = '700';
    role.style.fontSize = '0.9rem';
    role.style.marginBottom = '16px';

    const info = document.createElement('div');

    info.style.display = 'flex';
    info.style.flexDirection = 'column';
    info.style.gap = '8px';
    info.style.marginTop = '14px';
    info.style.color = '#334155';
    info.style.fontSize = '0.95rem';

    if (member.id) {
      const id = document.createElement('span');
      id.textContent = `ID: ${member.id}`;
      info.append(id);
    }

    if (member.email) {
      const email = document.createElement('a');
      email.href = `mailto:${member.email}`;
      email.textContent = member.email;
      email.style.color = '#1f4f82';
      email.style.textDecoration = 'none';
      email.style.fontWeight = '600';
      info.append(email);
    }

    if (member.phone) {
      const phone = document.createElement('span');
      phone.textContent = `Phone: ${member.phone}`;
      info.append(phone);
    }

    card.append(imageWrapper, title, role, info);
    grid.append(card);
  });

  section.append(heading, intro, grid);
  main.append(section);
});