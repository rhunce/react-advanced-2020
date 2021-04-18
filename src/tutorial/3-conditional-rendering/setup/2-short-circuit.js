import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h2>Value1: {firstValue}</h2> */}
      {/* <h2>Value2: {secondValue}</h2> */}
      {/* {!text && <h2>No Text</h2>} */}
      {/* {text && <h2>Text</h2>} */}
      <h2>{text || 'John Doe'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>Error...</h1> : <h1>No Error</h1>}
    </>
  );
};

export default ShortCircuit;
