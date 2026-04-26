const navItems = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'pages/domain.html', label: 'Domain', key: 'domain' },
  { href: 'pages/milestones.html', label: 'Milestones', key: 'milestones' },
  { href: 'pages/documents.html', label: 'Documents', key: 'documents' },
  { href: 'pages/presentations.html', label: 'Presentations', key: 'presentations' },
  { href: 'pages/about.html', label: 'About Us', key: 'about' },
  { href: 'pages/contact.html', label: 'Contact', key: 'contact' }
];

export function createNavbar(activeKey) {
  const header = document.createElement('header');
  header.className = 'navbar';

  const inner = document.createElement('div');
  inner.className = 'navbar__inner';

  const logo = document.createElement('a');
  logo.className = 'logo';
  logo.href = activeKey === 'home' ? 'index.html' : '../index.html';
  logo.textContent = 'Research Project';

  const nav = document.createElement('nav');
  nav.className = 'nav-links';

  navItems.forEach((item) => {
    const link = document.createElement('a');
    const homeLevel = activeKey === 'home';
    link.href = homeLevel ? item.href : item.href.replace('pages/', '');
    link.className = `nav-link${item.key === activeKey ? ' active' : ''}`;
    link.textContent = item.label;
    nav.append(link);
  });

  inner.append(logo, nav);
  header.append(inner);
  return header;
}

export function createFooter(activeKey) {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const inner = document.createElement('div');
  inner.className = 'footer__inner';

  const copy = document.createElement('p');
  copy.textContent = `© ${new Date().getFullYear()} Research Project Group`;

  const links = document.createElement('div');
  links.className = 'footer__links';

  const isHome = activeKey === 'home';
  const linkData = [
    { href: isHome ? 'index.html' : '../index.html', text: 'Home' },
    { href: isHome ? 'pages/contact.html' : 'contact.html', text: 'Contact' },
    { href: isHome ? 'pages/about.html' : 'about.html', text: 'About' }
  ];

  linkData.forEach((item) => {
    const anchor = document.createElement('a');
    anchor.href = item.href;
    anchor.textContent = item.text;
    links.append(anchor);
  });

  inner.append(copy, links);
  footer.append(inner);
  return footer;
}

export function createHero({ title, description, buttonText, buttonLink }) {
  const section = document.createElement('section');
  section.className = 'hero';

  const heading = document.createElement('h1');
  heading.textContent = title;

  const para = document.createElement('p');
  para.textContent = description;

  const button = document.createElement('a');
  button.className = 'btn btn-primary';
  button.textContent = buttonText;
  button.href = buttonLink;

  section.append(heading, para, button);
  return section;
}

export function createSection(title, content) {
  const section = document.createElement('section');
  section.className = 'section';

  const heading = document.createElement('h2');
  heading.textContent = title;
  section.append(heading);

  if (typeof content === 'string') {
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    section.append(paragraph);
  } else if (Array.isArray(content)) {
    content.forEach((node) => section.append(node));
  } else if (content instanceof Node) {
    section.append(content);
  }

  return section;
}

export function createCard({ title, description, image, linkText, linkUrl }) {
  const card = document.createElement('article');
  card.className = 'card';

  if (image) {
    const img = document.createElement('img');
    img.className = 'card__image';
    img.src = image;
    img.alt = title;
    card.append(img);
  }

  const content = document.createElement('div');
  content.className = 'card__content';

  const heading = document.createElement('h3');
  heading.className = 'card__title';
  heading.textContent = title;

  const body = document.createElement('p');
  body.className = 'card__description';
  body.textContent = description;

  content.append(heading, body);

  if (linkText && linkUrl) {
    const link = document.createElement('a');
    link.className = 'card__link';
    link.href = linkUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `${linkText} →`;
    content.append(link);
  }

  card.append(content);
  return card;
}

export function createMilestone({ title, date, marks, details }) {
  const item = document.createElement('details');
  item.className = 'milestone';

  const summary = document.createElement('summary');

  const name = document.createElement('span');
  name.textContent = title;

  const meta = document.createElement('span');
  meta.className = 'milestone__meta';
  meta.textContent = `${date} • ${marks}`;

  const detailText = document.createElement('p');
  detailText.className = 'milestone__details';
  detailText.textContent = details;

  summary.append(name, meta);
  item.append(summary, detailText);
  return item;
}

export function createContactForm() {
  const form = document.createElement('form');
  form.className = 'contact-form';

  form.innerHTML = `
    <input class="input" type="text" name="name" placeholder="Name" required />
    <input class="input" type="email" name="email" placeholder="Email" required />
    <textarea class="textarea" name="message" placeholder="Message" required></textarea>
    <button class="btn btn-primary" type="submit">Send Message</button>
    <p class="form-status" aria-live="polite"></p>
  `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = 'Thank you! Your message has been received.';
    form.reset();
  });

  return form;
}

export function createPageShell(activeKey, contentBuilder) {
  const app = document.getElementById('app');
  app.className = 'page-shell';

  const main = document.createElement('main');
  contentBuilder(main);

  app.append(createNavbar(activeKey), main, createFooter(activeKey));
}
