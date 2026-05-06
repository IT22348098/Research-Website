import { createCard, createPageShell, createSection } from "../components.js";

const documents = [
  {
    title: "Project Charter",
    description:
      "Foundational project scope, team roles, and expected outcomes.",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=15iDGKwmTScRvtZ16-rdtQmvpb8xol6-T",
  },

  {
    title: "Checklist",
    description: "Checklist",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=1pJKCggjGwt8VSPG4ETabPwhnzJJx0RTb",
  },

  {
    title: "Final Thesis Report",
    description:
      "Complete research thesis including analysis, implementation, evaluation, and conclusions.",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=1if0iZdZLgPrWqJAq5N9JWwuRw5NQjc7U",
  },

  {
    title: "Proposal Report",
    description: "Proposal Report Included",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=1D4hpOPtkX4LbE7bO1jsXgf4LFdlW4Jwq",
  },
];

createPageShell("documents", (main) => {
  const grid = document.createElement("div");
  grid.className = "grid";

  documents.forEach((doc) => grid.append(createCard(doc)));

  main.append(createSection("Documents", grid));
});
