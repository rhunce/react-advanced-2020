import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// Reducer function
import reducer from './reducer';

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <button>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({
                  type: 'REMOVE_ITEM',
                  payload: person.id,
                });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
