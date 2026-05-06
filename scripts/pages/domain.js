import { createPageShell, createSection } from '../components.js';

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
    'The main objective is to develop an AI-powered system for diabetic medical report digitization and analysis. The specific objectives include: (1) enhancing medical report images using U-Net to improve OCR accuracy, (2) extracting structured clinical data using OCR and NLP techniques,  interpreting medical values into meaningful clinical insights using Bio_ClinicalBERT, (3) predicting diabetes risk using XGBoost-based machine learning models,  generating personalized medical recommendations based on patient conditions, and (4) providing multilingual translation and summarization in Sinhala and Tamil to improve accessibility and understanding.'
  ],

  [
    'System Methodology Overview',
    'The system follows a complete end-to-end AI pipeline consisting of four major stages: Image Enhancement, OCR-Based Extraction and Clinical Interpretation, Risk Prediction and Recommendation, and Multilingual Translation & Summarization. Each stage contributes to converting raw medical report images into structured, meaningful, and interpretable clinical insights.'
  ],

  [
    'Image Enhancement Module',
    'Medical report images often suffer from noise, blur, and low contrast, which reduces OCR accuracy. A U-Net-based deep learning model is used to enhance image quality by removing noise, improving contrast, and restoring text clarity. This preprocessing step significantly improves downstream extraction and analysis performance.'
  ],

  [
    'OCR-Based Extraction and Clinical Interpretation Module',
    'The enhanced images are processed using Tesseract OCR to extract raw textual information, including test names, values, units, and reference ranges. Due to noise and formatting inconsistencies, OCR outputs may contain errors, which are corrected in later processing stages.This module transforms raw extracted text into meaningful clinical insights. Bio_ClinicalBERT is used for Named Entity Recognition (NER) to identify medical entities such as test names, values, units, and reference ranges. A rule-based interpretation layer then classifies results as Low, Normal, or High based on clinical thresholds. This module bridges the gap between raw data and human-understandable medical insights, making reports interpretable for both doctors and patients.'
  ],

  [
    'Risk Prediction and Recommendation Module',
    'A machine learning model based on XGBoost is used to predict diabetes risk using clinical parameters such as glucose levels, BMI, HbA1c, and patient history. A risk scoring system classifies patients into different risk levels. Based on the prediction output, a recommendation engine generates personalized lifestyle and dietary advice tailored to patient conditions, including Sri Lankan dietary patterns and cultural practices.'
  ],

  [
    'Multilingual Translation and Summarization Module',
    'This module improves accessibility by converting complex clinical reports into simplified and understandable language. ClinicalT5 is used for generating structured summaries, while MarianMT is used for translation into Sinhala and Tamil. The system produces both professional clinical summaries and patient-friendly explanations, ensuring accessibility across different language groups.'
  ],

  [
    'System Integration',
    'All modules are integrated into a unified web-based system. The workflow starts with image upload and proceeds through enhancement, OCR extraction, clinical interpretation, risk prediction, and finally multilingual summarization. The system provides structured outputs, visual dashboards, and downloadable reports for both clinical and patient use.'
  ],

  [
    'Technologies Used',
    'The system is implemented using Python with TensorFlow and PyTorch frameworks. U-Net is used for image enhancement, Tesseract for OCR, Bio_ClinicalBERT for clinical entity extraction and interpretation engine, XGBoost for diabetes risk prediction, and MarianMT and ClinicalT5 for translation and summarization. The frontend is developed using React to provide an interactive and user-friendly interface. Also Models are trained on Google Colab and the Database used is MongoDB'
  ]

];

createPageShell('domain', (main) => {
  sections.forEach(([title, body]) => {
    main.append(createSection(title, body));
  });
});