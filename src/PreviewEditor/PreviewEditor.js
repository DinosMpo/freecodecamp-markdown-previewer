import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './PreviewEditor.css';

export default function PreviewEditor({text}) {
  return (
    <div id="previewEditorContainer">
      <div id="previewEditorTitle">Preview</div>
      <div id="preview"><Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown></div>
    </div>
  )
}
