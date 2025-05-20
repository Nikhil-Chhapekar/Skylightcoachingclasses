// Script to update AI-related content to coaching-related content in all HTML files
const fs = require('fs');
const path = require('path');

// Files to update
const files = [
  'index.html',
  'about.html',
  'courses.html',
  'testimonials.html',
  'contact.html'
];

// Content replacements
const replacements = [
  // Our Story section
  { 
    from: 'Our journey has been marked by continuous innovation and a commitment to excellence. We pioneered the Augmented AI Learning approach in 2018, revolutionizing how students prepare for competitive exams like MHTCET and NEET.',
    to: 'Our journey has been marked by continuous innovation and a commitment to excellence. We pioneered our unique teaching methodology in 2018, revolutionizing how students prepare for competitive exams like MHTCET and NEET.'
  },
  
  // Mission
  {
    from: 'To empower students from grades 5-12 with personalized, technology-enhanced education that builds strong foundations and prepares them for academic success and competitive examinations like MHTCET and NEET.',
    to: 'To empower students from grades 5-12 with personalized, expert-guided education that builds strong foundations and prepares them for academic success and competitive examinations like MHTCET and NEET.'
  },
  
  // Vision
  {
    from: 'To be the most innovative and effective educational institution that transforms the learning experience through Augmented AI technology, creating a new generation of confident, knowledgeable, and successful students.',
    to: 'To be the most innovative and effective educational institution that transforms the learning experience through our expert teaching methodology, creating a new generation of confident, knowledgeable, and successful students.'
  },
  
  // Approach section heading
  {
    from: 'Our Augmented AI Learning Approach',
    to: 'Our Proven Teaching Methodology'
  },
  
  // Approach description
  {
    from: 'How we combine human expertise with artificial intelligence to deliver exceptional educational outcomes.',
    to: 'How we combine expert faculty with personalized attention to deliver exceptional educational outcomes.'
  },
  
  // Personalized Learning Paths
  {
    from: 'Our AI system analyzes each student\'s strengths, weaknesses, and learning style to create customized study plans that optimize their learning journey.',
    to: 'Our expert teachers assess each student\'s strengths, weaknesses, and learning style to create customized study plans that optimize their learning journey.'
  },
  
  // Adaptive Practice
  {
    from: 'Students receive practice questions that automatically adjust in difficulty based on their performance, ensuring they\'re always challenged at the right level.',
    to: 'Students receive carefully curated practice questions that gradually increase in difficulty based on their performance, ensuring they\'re always challenged at the right level.'
  },
  
  // Expert Human Guidance
  {
    from: 'Our experienced faculty members work alongside the AI system, providing the human touch, motivation, and expert guidance that technology alone cannot provide.',
    to: 'Our experienced faculty members provide personalized attention, motivation, and expert guidance to help students overcome challenges and achieve their academic goals.'
  },
  
  // FAQ - How does your Augmented AI Learning work?
  {
    from: 'How does your Augmented AI Learning work?',
    to: 'How does your teaching methodology work?'
  },
  
  // FAQ - AI Learning answer
  {
    from: 'Our Augmented AI Learning system combines traditional classroom teaching with AI-powered personalized learning. The AI analyzes each student\'s performance, identifies knowledge gaps, and creates customized study plans. Our teachers then provide targeted guidance based on these insights.',
    to: 'Our teaching methodology combines traditional classroom instruction with personalized attention. Our expert teachers assess each student\'s performance, identify knowledge gaps, and create customized study plans. We then provide targeted guidance based on these insights to ensure academic success.'
  },
  
  // Online classes
  {
    from: 'Our online platform provides the same Augmented AI Learning experience with live interactive sessions, recorded lectures, and personalized study materials.',
    to: 'Our online platform provides the same high-quality learning experience with live interactive sessions, recorded lectures, and personalized study materials.'
  },
  
  // Footer
  {
    from: 'Empowering students with Augmented AI Learning for academic excellence.',
    to: 'Empowering students with expert coaching for academic excellence since 2010.'
  }
];

// Process each file
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  // Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    
    // Apply all replacements
    let updatedContent = data;
    replacements.forEach(({ from, to }) => {
      // Escape special characters for regex
      const escapedFrom = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedFrom, 'g');
      updatedContent = updatedContent.replace(regex, to);
    });
    
    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${file}:`, err);
        return;
      }
      console.log(`Updated content in ${file}`);
    });
  });
});

console.log('Content update script started...');
