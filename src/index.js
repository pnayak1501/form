import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QuizzBuilder } from "react-quizzes";
import QuizExample from "./QuizExample";
import "react-quizzes/lib/assets/antd.css";
import "./App.css";

function App() {
  const [formdata, setFormData] = useState([]);

  return (
    <div className="App">
      <QuizExample data={formdata} />
      <QuizzBuilder onChange={setFormData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
