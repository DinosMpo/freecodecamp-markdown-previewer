import "./TextEditor.css";

export default function TextEditor({ setText, text }) {
  return (
    <div id="textEditorContainer">
      <div id='textEditorTitle'>Text Editor</div>
      <textarea onChange={(e) => setText(() => e.target.value)} id="editor" value={text}></textarea>
    </div>
  )
}
