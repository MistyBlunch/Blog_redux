import axios from "axios";
import {
  TRAER_TODAS,
  CARGANDO, ERROR,
  UPDATED_INPUTS,
  GUARDAR,
  ACTUALIZAR
} from "../types/tareasTypes";

// Traer todas las tareas del usuario
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

// Cambiar el input del id del usuario y el titulo ded ToDo
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

// Agregar ToDo
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
      type: GUARDAR
    })
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: ERROR,
      payload: 'Intente más tarde.'
    })
  }
}

export const editar = (tarea_editada) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })

  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`, tarea_editada
    );
    console.log(response.data);

    dispatch({
      type: GUARDAR
    })
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: ERROR,
      payload: 'Intente más tarde.'
    })
  }
}

export const cambioCheck = (usr_id, tar_id) => (dispatch, getState) => {
  const { tareas } = getState().tareasReducer;
  const seleccionada = tareas[usr_id][tar_id];

  const actualizadas = {
    ...tareas
  };
  actualizadas[usr_id] = {
    ...tareas[usr_id]
  };
  actualizadas[usr_id][tar_id] = {
    ...tareas[usr_id][tar_id],
    completed: !seleccionada.completed
  };

  dispatch({
    type: ACTUALIZAR,
    payload: actualizadas
  })
}