function countCharacters(text) {
  let charCount = 0;
  for (let i = 0; i < text.length; i++) {
      // Check if the character is not a whitespace
      if (!/\s/.test(text[i])) {
          charCount++;
      }
  }
  return charCount;
}

// Example usage:
const text = `The projects I've led, both personally and in corporate settings, demonstrate my diverse skills:
1. **Library Book Management App:** Spearheaded development and deployment, enhancing library operations. Achieved a 30% decrease in overdue instances and a 20% collection efficiency boost. Designed backend using Node.js and integrated frontend with HTML, CSS, and JavaScript, showcasing full-stack expertise.
2. **Simple Calculator Project:** Developed a user-friendly calculator with JavaScript, HTML, and CSS. Enabled basic arithmetic operations, showcasing frontend and JavaScript proficiency.
3. **ESF Project at MTN Ghana:** Directed ESF platform integration, boosting operational efficiency by 80% and reducing errors by 10%. Collaborated across teams to design and develop composite applications, demonstrating strong coordination and project management skills.
These achievements underscore my prowess in frontend and backend technologies, problem-solving, and collaboration.
`;

const totalCount = countCharacters(text);
console.log("Total number of characters:", totalCount);