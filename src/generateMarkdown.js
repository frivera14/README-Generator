


// TODO: Create a function to generate markdown for README
const createTemplate = (data) => {
  return `
# ${data.name}
## Description
  
- What was the motivation? ${data.motivation}
- Why did I build this project? ${data.whyTho}
- What problem does it solve? ${data.problem}
- What did I learn? ${data.learn}
  
## Table of Contents (Optional)
  
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

Add a screenshot here:
  
"md ! [ alt text ] ( assets/images/screenshot. png )"
  
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