import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [mode, setMode] = useState(false);
  const [score, setScore] = useState(0);
  const [dark, setDark] = useState(false);

  const color = () => {
    setMode((prevMode) => !prevMode);
  };

  const [pgNo, setPgNo] = useState(0);
  const update = (pg) => {
    setPgNo(pg);
  };

  return (
    <div>
      {pgNo === 0 && <Home props1={update} props2={color} dark={dark} setDark={setDark}/>}
      {pgNo === 1 && <QuestionBox props1={update} setScore={setScore} dark={dark} setDark={setDark}/>}
      {pgNo === 2 && <Result props1={update} score={score} setScore={setScore} dark={dark} setDark={setDark}/>}
    </div>
  );
}

export default App;
