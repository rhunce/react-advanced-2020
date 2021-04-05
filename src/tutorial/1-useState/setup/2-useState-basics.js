import React, { useState } from 'react';

const UseStateBasics = () => {
  let [title, setTitle] = useState('random title');

  const clickHandler = () => {
    title === 'random title'
      ? setTitle('Hello World')
      : setTitle('random title');
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
