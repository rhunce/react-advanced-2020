const reducer = (state, action) => {
  console.log('state: ', state, 'action: ', action);
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added!',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Person removed',
    };
  }
  throw new Error('No matching action type');
};

export default reducer;
