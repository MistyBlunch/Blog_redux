import axios from "axios";
import {
  TRAER_TODAS,
  CARGANDO, ERROR,
  UPDATED_INPUTS,
  TAREA_AGREGADA
} from "../types/tareasTypes";

export const traerTodas = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // Filtrará todas las tareas que pertenezcan al mismo usuario según su id
    const tareas = {};
    response.data.map((tar) => (
      tareas[tar.userId] = {
        ...tareas[tar.userId],
        [tar.id]: {
          ...tar
        }
      }
    ));

    dispatch({
      type: TRAER_TODAS,
      payload: tareas
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Información de tareas no disponible"
    });
  }
};


export const changeInput = (name, value) => (dispatch, getState) => {
  const reducer = getState().tareasReducer;

  const reducer_updated = {
    ...reducer,
    [name]: value
  };

  dispatch({
    type: UPDATED_INPUTS,
    payload: reducer_updated
  })
}

export const agregar = (nueva_tarea) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })

  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos', nueva_tarea
    );
    console.log(response.data);

    dispatch({
      type: TAREA_AGREGADA
    })
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: ERROR,
      payload: 'Intente más tarde.'
    })
  }
}