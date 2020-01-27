import {
  TRAER_TODAS,
  CARGANDO, ERROR,
  UPDATED_INPUTS,
  GUARDAR,
  ACTUALIZAR,
  LIMPIAR
} from "../types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  user_id: "",
  titulo: "",
  regresar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        tareas: action.payload,
        cargando: false,
        error: "",
        regresar: false
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    case UPDATED_INPUTS:
      return action.payload;
    case GUARDAR:
      return {
        ...state,
        tareas: {},
        cargando: false,
        error: "",
        regresar: true,
        user_id: "",
        titulo: ""
      }
    case ACTUALIZAR:
      return { ...state, tareas: action.payload }
    case LIMPIAR:
      return { ...state, user_id: '', titulo: '' }
    default:
      return state;
  }
};
