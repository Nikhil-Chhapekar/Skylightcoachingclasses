// Script to update colors in all HTML files
const fs = require('fs');
const path = require('path');

// Files to update
const files = [
  'about.html',
  'courses.html',
  'testimonials.html',
  'contact.html'
];

// Color replacements
const replacements = [
  // Logo and navigation
  { from: 'text-blue-600', to: 'text-orange-600' },
  { from: 'hover:text-blue-600', to: 'hover:text-orange-600' },
  { from: 'hover:bg-blue-700', to: 'hover:bg-orange-700' },
  
  // Headings
  { from: 'text-gray-800', to: 'text-black' },
  
  // Buttons and interactive elements
  { from: 'bg-blue-600', to: 'bg-orange-600' },
  { from: 'bg-blue-700', to: 'bg-orange-700' },
  { from: 'border-blue-600', to: 'border-orange-600' },
  { from: 'focus:ring-blue-600', to: 'focus:ring-orange-600' },
  
  // Background colors
  { from: 'bg-gradient-to-r from-blue-50 to-indigo-100', to: 'bg-gradient-to-r from-orange-50 to-yellow-100' },
  { from: 'text-blue-100', to: 'text-orange-100' },
  
  // Icons and accents
  { from: 'text-blue-600 mb-4', to: 'text-orange-600 mb-4' },
  { from: 'border-t-4 border-blue-600', to: 'border-t-4 border-orange-600' },
  
  // Footer
  { from: 'bg-gray-800 text-white', to: 'bg-black text-white' },
  { from: 'border-gray-700', to: 'border-gray-800' },
  
  // Links
  { from: 'text-blue-600 hover:text-blue-800', to: 'text-orange-600 hover:text-orange-800' },
  
  // FAQ chevrons
  { from: 'fa-chevron-down text-blue-600', to: 'fa-chevron-down text-orange-600' }
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
      // Use a regular expression with global flag to replace all occurrences
      const regex = new RegExp(from, 'g');
      updatedContent = updatedContent.replace(regex, to);
    });
    
    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${file}:`, err);
        return;
      }
      console.log(`Updated colors in ${file}`);
    });
  });
});

console.log('Color update script started...');
