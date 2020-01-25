import axios from "axios";
import { TRAER_TODAS, CARGANDO, ERROR } from "../types/tareasTypes";

export const traerTodas = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch({
      type: TRAER_TODAS,
      payload: response.data
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Información de tareas no disponible"
    });
  }
};
