import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.css';

const initialMarkdown = `# Heading H1
## Subheading H2
[Link](https://www.example.com)
Inline code: \`<div></div>\`
\`\`\`
Code block:
function example() {
  console.log("Hello, world!");
}
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const clearText = () => {
    setMarkdown('');
  };

  const getMarkdownText = () => {
    marked.setOptions({ breaks: true });
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-editor">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown"
      />
      <button onClick={clearText} className="clear-button">Clear Text</button>
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default MarkdownEditor;
