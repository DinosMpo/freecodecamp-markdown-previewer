import { useState } from 'react';
import './App.css';
import TextEditor from './TextEditor/TextEditor';
import PreviewEditor from './PreviewEditor/PreviewEditor';

function App() {
  const headingElement = '# Welcome\n';
  const subHeadingElement = '## Sub-heading\n';
  const linkElement = '\nA [link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)\n\n';
  const inlineCode = '\ninline code: `x = 4;`\n\n';
  const codeBlock = 'A code block: \n```\nfunction sum(a, b) { return a + b }\n```\n\n';
  const listItem = '- A list item \n - first item \n- second item\n\n';
  const blockquote = '>A block quote\n\n';
  const image = 'An image \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n';
  const boldedText = '**A bolded text**';
  const result = headingElement + subHeadingElement + linkElement + inlineCode + codeBlock + listItem + blockquote + image + boldedText;
  // result.replaceAll("\n", "<br>");

  const [text, setText] = useState(result);

  return (
    <div className="App">
      <TextEditor setText={setText} text={text} />
      <PreviewEditor text={text} />
    </div>
  );
}

export default App;
