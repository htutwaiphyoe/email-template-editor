import EmailEditor from "react-email-editor";
import Textarea from "components/Textarea";
import React, { useRef, useState } from "react";
import data from "data/demo.json";

function App() {
  const editorRef = useRef<any>(null);
  const [inputFormat, setInputFormat] = useState(data);
  const [jsonFormat, setJsonFormat] = useState("");
  const [htmlFormat, setHtmlFormat] = useState("");

  const onLoad = () => {
    editorRef.current.editor.loadDesign(inputFormat);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputFormat(JSON.parse(e.target.value));
  };

  const handleImport = () => {
    setJsonFormat("");
    setHtmlFormat("");
    onLoad();
  };

  const handleExport = () => {
    editorRef.current.editor.exportHtml((data: any) => {
      const { design, html } = data;
      setJsonFormat(JSON.stringify(design));
      setHtmlFormat(html);
    });
  };

  return (
    <main>
      <section className="container wrapper mb-3">
        <Textarea onChange={handleInputChange} />
        <button className="btn" onClick={handleImport}>
          Import
        </button>
      </section>
      <section className="container wrapper mb-3">
        <EmailEditor minHeight="700px" ref={editorRef} onLoad={onLoad} />
        <button className="btn mt-3" onClick={handleExport}>
          Export
        </button>
      </section>
      <section className="flex container mt-3">
        <div className="flex-1 wrapper">
          <h2 className="title">JSON Format</h2>
          <Textarea value={jsonFormat} />
        </div>
        <div className="flex-1 wrapper">
          <h2 className="title">HTML Format</h2>
          <Textarea value={htmlFormat} />
        </div>
      </section>
    </main>
  );
}

export default App;
