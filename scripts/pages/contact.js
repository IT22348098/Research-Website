import { createContactForm, createPageShell, createSection } from '../components.js';

createPageShell('contact', (main) => {
  main.append(
    createSection(
      'Contact Us',
      createContactForm()
    )
  );
});
