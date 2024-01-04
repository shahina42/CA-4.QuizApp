import React from 'react';

export default function Result(props) {
  const { dark, setDark, props1, score } = props;

  const percent = (score / 5) * 100;

  const change = () => {
    props1(0);
  };

  const textclr = dark ? { color: 'white' } : {};
  const bdyclr = dark ? { background: 'rgb(1, 13, 54)' } : {};

  return (
    <div style={bdyclr}>
      <div className='nav'>
        <h1 style={textclr}>KALVIUM</h1>
        <button className='mode' onClick={() => setDark(!dark)}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className='pg3'>
        <div className='result_pg'>
          <h1>Final Result</h1>
          <h4>{score} out of 5 Questions are correct - ({percent}%)</h4>
          <button className='restart_btn' onClick={change}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
