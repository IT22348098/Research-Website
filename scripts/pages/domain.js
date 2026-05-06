import { createPageShell } from '../components.js';

const sections = [

  [
    'Literature Survey',
    'Recent advancements in Artificial Intelligence (AI) and Machine Learning (ML) have significantly transformed healthcare through applications such as disease prediction, medical imaging, and clinical decision support systems. Deep learning models like U-Net are widely used for medical image enhancement and restoration due to their ability to preserve spatial features and improve clarity of degraded documents. Transformer-based models such as BERT, BioBERT, and ClinicalBERT are effective in extracting structured clinical information from unstructured medical text. Optical Character Recognition (OCR) systems such as Tesseract are commonly used for digitizing scanned medical reports, though they require preprocessing for optimal performance. Machine learning models such as Random Forest, Gradient Boosting, and XGBoost are widely applied for diabetes prediction tasks. However, most existing systems are isolated and lack a fully integrated end-to-end medical document intelligence framework that combines enhancement, extraction, interpretation, prediction, and multilingual communication.'
  ],

  [
    'Research Gap',
    'Existing healthcare AI systems are mostly task-specific, focusing only on individual components such as OCR, image enhancement, or disease prediction. There is a lack of unified systems that integrate all stages of medical document processing, including image enhancement, OCR-based extraction, clinical entity recognition, interpretation of medical values, diabetes risk prediction, recommendation generation, and multilingual summarization. Furthermore, most systems do not provide human-readable clinical explanations, reducing usability for patients. Another major limitation is the lack of support for low-resource languages such as Sinhala and Tamil, which reduces accessibility in countries like Sri Lanka. Additionally, fully automated end-to-end processing from raw medical images to structured clinical insights is still insufficient in current research.'
  ],

  [
    'Research Problem',
    'Medical laboratory reports are typically stored as scanned images or physical documents, making them difficult to interpret, analyze, and manage efficiently. Manual interpretation by healthcare professionals is time-consuming and prone to human error, while patients often struggle to understand complex medical terminology and numerical results. These challenges are further intensified by language barriers in multilingual regions. Therefore, the core research problem is designing an intelligent, scalable, and automated AI system that can enhance medical images, extract and interpret clinical data, predict diabetes risk, and present results in a structured, clear, and multilingual format for both doctors and patients.'
  ],

  [
    'Research Objectives',
    'The main objective is to develop an AI-powered system for diabetic medical report digitization and analysis. The specific objectives include: (1) enhancing medical report images using U-Net to improve OCR accuracy, (2) extracting structured clinical data using OCR and NLP techniques, interpreting medical values into meaningful clinical insights using Bio_ClinicalBERT, (3) predicting diabetes risk using XGBoost-based machine learning models, generating personalized medical recommendations based on patient conditions, and (4) providing multilingual translation and summarization in Sinhala and Tamil to improve accessibility and understanding.'
  ],

  [
    'System Methodology Overview',
    'The system follows a complete end-to-end AI pipeline consisting of four major stages: Image Enhancement, OCR-Based Extraction and Clinical Interpretation, Risk Prediction and Recommendation, and Multilingual Translation & Summarization. Each stage contributes to converting raw medical report images into structured, meaningful, and interpretable clinical insights.'
  ]

];

const references = [
  {
    text: '[1] F. A. Shahabuddin et al., “Medical record abstraction in a hospital with paper-based records,” BJPsych Int., 2020.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32558818/'
  },

  {
    text: '[2] X. Yang et al., “Enhancing doctor–patient communication using large language models for pathology report interpretation,” BMC Med. Inform. Decis. Mak., 2025.',
    link: 'https://link.springer.com/article/10.1186/s12911-024-02838-z'
  },

  {
    text: '[3] J. P. Martinez et al., “Electronic health records, mobile health, and the challenge of improving global health,” 2021.',
    link: 'https://www.sciencedirect.com/science/article/pii/S1538544221001668'
  },

  {
    text: '[4] M. R. Grover and J. M. Teng, “Paperless healthcare,” Business Horizons, 2010.',
    link: 'https://www.sciencedirect.com/science/article/pii/S0007681309001529'
  },

  {
    text: '[5] E. Esteva et al., “A guide to deep learning in healthcare,” Nature Medicine, 2019.',
    link: 'https://www.nature.com/articles/s41591-018-0316-z'
  }
];

createPageShell('domain', (main) => {

  // Hero Section
  const hero = document.createElement('section');

  hero.style.background =
    'linear-gradient(135deg, #1f4f82 0%, #19b8a6 100%)';

  hero.style.padding = '70px 50px';
  hero.style.borderRadius = '32px';
  hero.style.color = '#ffffff';
  hero.style.marginBottom = '36px';
  hero.style.boxShadow = '0 14px 40px rgba(15,23,42,0.18)';

  const heroTitle = document.createElement('h1');

  heroTitle.textContent = 'Research Domain';

  heroTitle.style.fontSize = '3rem';
  heroTitle.style.marginBottom = '18px';

  const heroText = document.createElement('p');

  heroText.textContent =
    'Comprehensive overview of the research background, problem statement, methodology, technologies, and academic references used in the AI-powered diabetic diagnosis system.';

  heroText.style.fontSize = '1.15rem';
  heroText.style.lineHeight = '1.9';
  heroText.style.maxWidth = '950px';

  hero.append(heroTitle, heroText);

  main.append(hero);

  // Section Cards
  sections.forEach(([title, body], index) => {

    const card = document.createElement('section');

    card.style.background = '#ffffff';
    card.style.border = '1px solid #dbe2ea';
    card.style.borderRadius = '28px';
    card.style.padding = '36px';
    card.style.marginBottom = '28px';
    card.style.boxShadow = '0 8px 24px rgba(15,23,42,0.06)';
    card.style.transition = '0.3s ease';

    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 16px 38px rgba(15,23,42,0.12)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 8px 24px rgba(15,23,42,0.06)';
    });

    const badge = document.createElement('div');

    badge.textContent = `0${index + 1}`;

    badge.style.width = '52px';
    badge.style.height = '52px';
    badge.style.borderRadius = '16px';
    badge.style.background =
      'linear-gradient(135deg, #1f4f82, #19b8a6)';
    badge.style.color = '#ffffff';
    badge.style.display = 'flex';
    badge.style.alignItems = 'center';
    badge.style.justifyContent = 'center';
    badge.style.fontWeight = '800';
    badge.style.fontSize = '1.2rem';
    badge.style.marginBottom = '20px';

    const heading = document.createElement('h2');

    heading.textContent = title;

    heading.style.color = '#1f4f82';
    heading.style.fontSize = '2rem';
    heading.style.marginBottom = '18px';

    const paragraph = document.createElement('p');

    paragraph.textContent = body;

    paragraph.style.lineHeight = '2';
    paragraph.style.fontSize = '1.05rem';
    paragraph.style.color = '#334155';

    card.append(badge, heading, paragraph);

    main.append(card);

  });

  // References Section
  const refSection = document.createElement('section');

  refSection.style.background = '#ffffff';
  refSection.style.border = '1px solid #dbe2ea';
  refSection.style.borderRadius = '28px';
  refSection.style.padding = '40px';
  refSection.style.marginTop = '24px';
  refSection.style.boxShadow = '0 8px 24px rgba(15,23,42,0.06)';

  const refTitle = document.createElement('h2');

  refTitle.textContent = 'References';

  refTitle.style.color = '#1f4f82';
  refTitle.style.fontSize = '2.2rem';
  refTitle.style.marginBottom = '30px';

  const refGrid = document.createElement('div');

  refGrid.style.display = 'grid';
  refGrid.style.gridTemplateColumns =
    'repeat(auto-fit, minmax(320px, 1fr))';

  refGrid.style.gap = '22px';

  references.forEach((reference) => {

    const refCard = document.createElement('a');

    refCard.href = reference.link;

    refCard.target = '_blank';

    refCard.rel = 'noopener noreferrer';

    refCard.style.background = '#f8fafc';
    refCard.style.border = '1px solid #dbe2ea';
    refCard.style.borderRadius = '22px';
    refCard.style.padding = '24px';
    refCard.style.textDecoration = 'none';
    refCard.style.color = '#1e293b';
    refCard.style.transition = '0.3s ease';
    refCard.style.boxShadow = '0 6px 18px rgba(15,23,42,0.05)';

    refCard.addEventListener('mouseover', () => {
      refCard.style.transform = 'translateY(-5px)';
      refCard.style.boxShadow =
        '0 14px 34px rgba(15,23,42,0.12)';
      refCard.style.borderColor = '#19b8a6';
    });

    refCard.addEventListener('mouseout', () => {
      refCard.style.transform = 'translateY(0)';
      refCard.style.boxShadow =
        '0 6px 18px rgba(15,23,42,0.05)';
      refCard.style.borderColor = '#dbe2ea';
    });

    const icon = document.createElement('div');

    icon.textContent = '📚';

    icon.style.fontSize = '2rem';
    icon.style.marginBottom = '14px';

    const text = document.createElement('p');

    text.textContent = reference.text;

    text.style.lineHeight = '1.8';
    text.style.fontSize = '1rem';
    text.style.fontWeight = '500';

    refCard.append(icon, text);

    refGrid.append(refCard);

  });

  refSection.append(refTitle, refGrid);

  main.append(refSection);

});