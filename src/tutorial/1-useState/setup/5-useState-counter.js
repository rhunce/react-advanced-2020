import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  function decreaseHandler() {
    let count = counter - 1;
    setCounter(count);
  }
  function resetHandler() {
    setCounter(0);
  }
  function increaseHandler() {
    let count = counter + 1;
    setCounter(count);
  }
  function complexIncreaseHandler() {
    // let count = counter + 1;
    // setTimeout(() => setCounter(count), 2000);
    setTimeout(() => {
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  }

  return (
    <>
      <div style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={decreaseHandler}>
          Decrease
        </button>
        <button className='btn' onClick={resetHandler}>
          Reset
        </button>
        <button className='btn' onClick={increaseHandler}>
          Increase
        </button>
      </div>
      <div style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={complexIncreaseHandler}>
          Increase Later
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;
