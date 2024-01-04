import React, { useState } from 'react';
import questions from '../questions';

export default function QuestionBox(props) {
  const { dark, setDark, props1, setScore } = props;

  const [index, setIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);

  const optionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIndex((prevIndex) => {
      if (prevIndex < 4) {
        return prevIndex + 1;
      } else {
        props1(2);
        return prevIndex;
      }
    });
  };

  const toggleHighlight = () => {
    setHighlight(true);
  };

  const removeHighlight = () => {
    setHighlight(false);
  };

  const txtclr = highlight ? { color: 'red' } : {};
  const bdyclr = dark ? { background: 'rgb(1, 13, 54)' } : {};

  return (
    <div style={bdyclr}>
      <div className='nav'>
        <h1 style={{ color: dark ? 'white' : 'black' }}>KALVIUM</h1>
        <button className='mode' onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className='pg2'>
        <div className='quiz_pg'>
          <h4>Question {index + 1} out of 5</h4>
          <h1 style={txtclr}>{questions[index].text}</h1>
          <div className='btns'>
            {questions[index].options.map((option) => (
              <button onClick={() => optionClick(option.isCorrect)} key={option.id} className='btn'>
                {option.text}
              </button>
            ))}
          </div>
          <div className='highlight'>
            <button className='highlight_btn' onClick={toggleHighlight}>
              Highlight
            </button>
            <button className='highlight_btn' onClick={removeHighlight}>
              No Highlight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
