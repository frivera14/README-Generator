


// TODO: Create a function to generate markdown for README
const createTemplate = (data) => {
  return `
# ${data.name}
## Description
  
- Reason behind the project: ${data.whyTho}
- Purpose or Problem Solved: ${data.problem}
- Important information learned: ${data.learn}
  
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

Screenshot attatched
  
![alt text](Capture.PNG)
  
## Credits
  
Collaborators: ${data.credits} 
  
## License
  
${data.license}

## Tests
  
${data.test}
  
## Questions
  
All questions and communications can be directed to:
Github: ${data.github} 
`;
}

module.exports =  createTemplate