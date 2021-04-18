import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect invoked!');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  });
  // the [] for the second argument makes useEffect act like a componentDidMount. Without the []/second argument, acts like componentDidUpdate. If you have [value], appears to work again like componentDidUpdate.

  useEffect(() => {
    console.log('Hello World');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
