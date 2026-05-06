import { createCard, createPageShell, createSection } from "../components.js";

const slides = [
  {
    title: "Proposal Presentation",
    description:
      "Slides covering motivation, problem statement, and planned milestones.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/15SAVr6KzjwXqNllZX4qQyI6Q4Gyx38-X/export/pptx",
  },

  {
    title: "Progress Presentation 1",
    description:
      "Mid-project update slides with architecture, implementation, and initial metrics.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/1iPlfQoBtmCQSCo7VZB6TP9fY6DOi9r0B/export/pptx",
  },

  {
    title: "Progress Presentation 2",
    description:
      "Updated progress slides with improved results, system enhancements, and evaluation metrics.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/1MvWCaPrzzi78F0-nMNO62kWIOOq557_d/export/pptx",
  },

  {
    title: "Final Presentation",
    description:
      "Final defense slides including outcomes, limitations, and future work.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/10W4WWIHYHu2yOaJqeSqckoIa_hMQ-pD0/export/pptx",
  },
];

createPageShell("presentations", (main) => {
  const grid = document.createElement("div");
  grid.className = "grid";

  slides.forEach((slide) => grid.append(createCard(slide)));

  main.append(createSection("Presentations", grid));
});
