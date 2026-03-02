import Card from "./components/card";
import user1 from "./assets/user1.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <div>
      <header className="header">
        <img src={user1} alt="logo" className="logo" />
      </header>

      <div className="cards">
        <Card onSelect={setSelectedTopic}>components</Card>
        <Card onSelect={setSelectedTopic}>content</Card>
        <Card onSelect={setSelectedTopic}>react</Card>
        <Card onSelect={setSelectedTopic}>review</Card>
      </div>
      <div className="content">
        {selectedTopic === "components" && (
          <p>components content here vchjgcsiucsjcvbusdgcbuhsdvcjucbjbc</p>
        )}
        {selectedTopic === "content" && <p>content is my passion</p>}
        {selectedTopic === "react" && <p>react is my loaf</p>}
        {selectedTopic === "review" && <p>giv review</p>}
      </div>
    </div>
  );
}
export default App;
