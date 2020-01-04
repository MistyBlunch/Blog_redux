const INITIAL_STATE = {
  usuarios: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "traer_usarios":
      return { ...state, usuarios: action.payload };
    default:
      return state;
  }
};
