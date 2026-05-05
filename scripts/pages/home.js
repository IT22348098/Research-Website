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
    ),

    createSection(
      'Key Features',
      '• Medical image enhancement using deep learning (U-Net)\n' +
      '• Automated OCR-based data extraction\n' +
      '• Clinical entity recognition and interpretation\n' +
      '• Diabetes risk prediction using machine learning (XGBoost)\n' +
      '• Personalized recommendations based on patient data\n' +
      '• Multilingual summarization and translation (Sinhala & Tamil)\n' +
      '• Web-based interactive dashboard for report visualization'
    ),

    createSection(
      'System Goal',
      'To develop a unified AI-driven healthcare platform that reduces manual effort in interpreting medical reports, improves diagnostic efficiency, and enhances patient understanding through structured, accurate, and multilingual medical insights.'
    )
  );
});