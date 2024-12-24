import Markdown from 'react-markdown';
import './PreviewEditor.css';

export default function PreviewEditor({text}) {
  return (
    <div id="previewEditorContainer">
      <div id="previewEditorTitle">Preview</div>
      <div id="preview"><Markdown>{text}</Markdown></div>
    </div>
  )
}
