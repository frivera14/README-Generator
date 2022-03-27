


// TODO: Create a function to generate markdown for README
const createTemplate = (data) => {
  return `
# ${data.name}
## Description
  
- What was your motivation? ${data.motivation}
- Why did you build this project? ${data.whyTho}
- What problem does it solve? ${data.problem}
- What did you learn? ${data.learn}
  
## Table of Contents (Optional)
  
If your README is long, add a table of contents to make it easy for users to find what they need.
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation

${data.install}

## Usage
  
${data.usage}

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
"md ![alt text](assets/images/screenshot.png)"
  
## Credits
  
Collaborators: ${data.credits} 
  
## License
  
${data.license}

## Tests
  
${data.tests}
  
## Questions
  
All questions and communications can be directed to:
Github: ${data.github} 
Email: ${data.email}
`;
}

module.exports =  createTemplate