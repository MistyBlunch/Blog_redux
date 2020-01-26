import { TRAER_TODAS, CARGANDO, ERROR, UPDATED_INPUTS } from "../types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  user_id: "9",
  titulo: "qwerty"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return { ...state, tareas: action.payload, cargando: false, error: "" };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    case UPDATED_INPUTS:
      return action.payload;
    default:
      return state;
  }
};
