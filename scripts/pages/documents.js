import { createPageShell } from "../components.js";

const documents = [
  {
    title: "Project Charter",
    description: "Foundational project scope, team roles, and expected outcomes.",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=15iDGKwmTScRvtZ16-rdtQmvpb8xol6-T",
  },
  {
    title: "Checklist",
    description: "Project checklist and required submission verification details.",
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
    description: "Initial proposal report including research problem, objectives, and methodology.",
    linkText: "Open Document",
    linkUrl:
      "https://drive.google.com/uc?export=download&id=1D4hpOPtkX4LbE7bO1jsXgf4LFdlW4Jwq",
  },
];

createPageShell("documents", (main) => {
  const section = document.createElement("section");
  section.className = "section";

  const heading = document.createElement("h2");
  heading.textContent = "Documents";

  const intro = document.createElement("p");
  intro.textContent =
    "Access important project documents including proposal, charter, checklist, and final thesis report.";

  const grid = document.createElement("div");

  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
  grid.style.gap = "24px";
  grid.style.marginTop = "32px";

  documents.forEach((doc) => {
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
    icon.textContent = "📄";
    icon.style.fontSize = "2.4rem";
    icon.style.marginBottom = "18px";

    const title = document.createElement("h3");
    title.textContent = doc.title;
    title.style.color = "#1f4f82";
    title.style.fontSize = "1.45rem";
    title.style.marginBottom = "12px";

    const description = document.createElement("p");
    description.textContent = doc.description;
    description.style.color = "#334155";
    description.style.lineHeight = "1.7";
    description.style.marginBottom = "22px";

    const link = document.createElement("a");
    link.href = doc.linkUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${doc.linkText} →`;

    link.style.display = "inline-block";
    link.style.padding = "10px 18px";
    link.style.borderRadius = "999px";
    link.style.background = "linear-gradient(135deg, #1f4f82, #19b8a6)";
    link.style.color = "#ffffff";
    link.style.textDecoration = "none";
    link.style.fontWeight = "700";

    card.append(icon, title, description, link);
    grid.append(card);
  });

  section.append(heading, intro, grid);
  main.append(section);
});