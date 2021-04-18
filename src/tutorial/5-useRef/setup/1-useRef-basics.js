import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current);
    console.log(refContainer.current.value);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
