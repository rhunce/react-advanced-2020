import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random Message',
  });

  const changeMessage = () => {
    /*
    setPerson({
      name: 'Peter',
      age: 24,
      message: 'Hello World',
    });
    */
    // OR
    setPerson({ ...person, message: 'Hello World' });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
