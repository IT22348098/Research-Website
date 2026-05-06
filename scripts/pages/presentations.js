import { createPageShell } from "../components.js";

const slides = [
  {
    title: "Proposal Presentation",
    description:
      "Slides covering motivation, problem statement, research objectives, and planned milestones.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/15SAVr6KzjwXqNllZX4qQyI6Q4Gyx38-X/export/pptx",
  },

  {
    title: "Progress Presentation 1",
    description:
      "Mid-project update slides with architecture design, implementation progress, and initial evaluation metrics.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/1iPlfQoBtmCQSCo7VZB6TP9fY6DOi9r0B/export/pptx",
  },

  {
    title: "Progress Presentation 2",
    description:
      "Updated progress presentation including improved results, integration pipeline, and testing outcomes.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/1MvWCaPrzzi78F0-nMNO62kWIOOq557_d/export/pptx",
  },

  {
    title: "Final Presentation",
    description:
      "Final defense presentation including implementation results, limitations, conclusions, and future improvements.",
    linkText: "View Slides",
    linkUrl:
      "https://docs.google.com/presentation/d/10W4WWIHYHu2yOaJqeSqckoIa_hMQ-pD0/export/pptx",
  },
];

createPageShell("presentations", (main) => {

  const section = document.createElement("section");
  section.className = "section";

  const heading = document.createElement("h2");
  heading.textContent = "Presentations";

  const intro = document.createElement("p");
  intro.textContent =
    "Browse all project presentations including proposal, progress evaluations, and final defense slides.";

  const grid = document.createElement("div");

  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
  grid.style.gap = "24px";
  grid.style.marginTop = "32px";

  slides.forEach((slide) => {

    const card = document.createElement("article");

    card.style.background = "#f8fafc";
    card.style.border = "1px solid #dbe2ea";
    card.style.borderRadius = "24px";
    card.style.padding = "28px";
    card.style.boxShadow = "0 6px 18px rgba(15, 23, 42, 0.06)";
    card.style.transition = "0.3s ease";

    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-6px)";
      card.style.boxShadow = "0 12px 28px rgba(15, 23, 42, 0.12)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 6px 18px rgba(15, 23, 42, 0.06)";
    });

    const icon = document.createElement("div");

    icon.textContent = "📊";
    icon.style.fontSize = "2.5rem";
    icon.style.marginBottom = "18px";

    const title = document.createElement("h3");

    title.textContent = slide.title;
    title.style.color = "#1f4f82";
    title.style.fontSize = "1.45rem";
    title.style.marginBottom = "12px";

    const description = document.createElement("p");

    description.textContent = slide.description;
    description.style.color = "#334155";
    description.style.lineHeight = "1.7";
    description.style.marginBottom = "22px";

    const link = document.createElement("a");

    link.href = slide.linkUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${slide.linkText} →`;

    link.style.display = "inline-block";
    link.style.padding = "10px 18px";
    link.style.borderRadius = "999px";
    link.style.background =
      "linear-gradient(135deg, #1f4f82, #19b8a6)";
    link.style.color = "#ffffff";
    link.style.textDecoration = "none";
    link.style.fontWeight = "700";

    card.append(icon, title, description, link);

    grid.append(card);

  });

  section.append(heading, intro, grid);

  main.append(section);

});