const inviteesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVITEE':
      return [...state, action.payload.invitee]
    default:
      return state;
  }
};

export default inviteesReducer;
