import React, { useState } from 'react';
import '../App.css';

const Home = (props) => {
  const { dark, setDark } = props;

  const todark = () => {
    setDark(!dark);
  };

  const textclr = dark ? { color: 'white' } : {};
  const bdyclr = dark ? { background: 'rgb(1, 13, 54)' } : {};

  const change = () => {
    props.props1(1);
  };

  return (
    <div style={bdyclr}>
      <div className='nav'>
        <h1 style={textclr}>KALVIUM</h1>
        <button className='mode' onClick={todark}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className='pg1'>
        <div className='home_pg'>
          <h1> Quiz App</h1>
          <h4>Lets test your general knowledge</h4>
          <button className='Start_btn' onClick={change}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
