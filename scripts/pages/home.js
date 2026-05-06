import { createHero, createPageShell, createSection } from '../components.js';

createPageShell('home', (main) => {

  main.append(

    createHero({
      title: 'AI-Driven Diagnosis of Diabetic Patients from Medical Records',
      description:
        'An intelligent AI-powered system that automates the digitization, interpretation, and analysis of medical laboratory reports. The platform integrates deep learning, OCR, natural language processing, and machine learning to enhance medical image quality, extract clinical information, predict diabetes risk, and generate multilingual patient-friendly summaries in Sinhala, Tamil, and English.',
      buttonText: 'Explore Project',
      buttonLink: 'pages/milestones.html'
    }),

    createSection(
      'Project Overview',
      'This research focuses on developing an end-to-end AI system for medical report processing. It transforms scanned medical documents into structured clinical insights by combining image enhancement (U-Net), OCR (Tesseract), medical entity recognition (Bio_ClinicalBERT), diabetes risk prediction (XGBoost), and multilingual summarization (ClinicalT5 and MarianMT). The system aims to improve accessibility, accuracy, and interpretability of diabetic medical reports for both healthcare professionals and patients.'
    )

  );

  // Key Features Section
  const keyFeatureSection = document.createElement('section');

  keyFeatureSection.className = 'card';
  keyFeatureSection.style.padding = '32px';

  const keyTitle = document.createElement('h2');

  keyTitle.textContent = 'Key Features';
  keyTitle.style.color = '#1f4f82';
  keyTitle.style.fontSize = '2.2rem';
  keyTitle.style.fontWeight = '700';
  keyTitle.style.marginBottom = '28px';

  const keyList = document.createElement('ul');

  keyList.style.lineHeight = '1.9';
  keyList.style.paddingLeft = '28px';
  keyList.style.fontSize = '1.05rem';
  keyList.style.color = '#0f172a';

  const features = [
    'Medical image enhancement using deep learning (U-Net)',
    'Automated OCR-based data extraction',
    'Clinical entity recognition and interpretation',
    'Diabetes risk prediction using machine learning (XGBoost)',
    'Personalized recommendations based on patient data',
    'Multilingual summarization and translation (Sinhala & Tamil)',
    'Web-based interactive dashboard for report visualization'
  ];

  features.forEach((feature) => {

    const li = document.createElement('li');

    li.textContent = feature;
    li.style.marginBottom = '10px';

    keyList.append(li);

  });

  keyFeatureSection.append(keyTitle, keyList);

  main.append(keyFeatureSection);

  // System Goal Section
  main.append(

    createSection(
      'System Goal',
      'To develop a unified AI-driven healthcare platform that reduces manual effort in interpreting medical reports, improves diagnostic efficiency, and enhances patient understanding through structured, accurate, and multilingual medical insights.'
    )

  );

});