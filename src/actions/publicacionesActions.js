import axios from "axios";

import * as usuariosTypes from "../types/usuariosTypes";
import {
  ACTUALIZAR,
  CARGANDO,
  ERROR,
  COMMENT_CARGANDO,
  COMMENT_ERROR,
  COMMENT_ACTUALIZAR
} from "../types/publicacionesTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = key => async (dispatch, getState) => {
  dispatch({
    type: CARGANDO
  });

  const { usuarios } = getState().usuariosReducer; //Destucturando usuarios del estado actual
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
    );

    const nuevas = response.data.map(publicacion => ({
      ...publicacion,
      comentarios: [],
      abierto: false
    }));

    const publicaciones_actualizadas = [...publicaciones, nuevas];

    dispatch({
      type: ACTUALIZAR,
      payload: publicaciones_actualizadas
    });

    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];
    usuarios_actualizados[key] = {
      ...usuarios[key],
      publicaciones_key
    };

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Publicaciones no disponibles"
    });
  }
};

// getState te permite traer estado actual
export const abrirCerrar = (pub_key, comment_key) => (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const seleccionada = publicaciones[pub_key][comment_key];

  const actualizada = {
    ...seleccionada,
    abierto: !seleccionada.abierto
  };

  const publicaciones_actualizadas = [...publicaciones];
  publicaciones_actualizadas[pub_key] = [
    ...publicaciones[pub_key]
  ];
  publicaciones_actualizadas[pub_key][comment_key] = actualizada;

  dispatch({
    type: ACTUALIZAR,
    payload: publicaciones_actualizadas
  });
};

export const traerComentarios = (pub_key, comment_key) => async (dispatch, getState) => {
  dispatch({
    type: COMMENT_CARGANDO
  });

  const { publicaciones } = getState().publicacionesReducer;
  const seleccionada = publicaciones[pub_key][comment_key];

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${seleccionada.id}`)

    const actualizada = {
      ...seleccionada,
      comentarios: response.data
    };

    const publicaciones_actualizadas = [...publicaciones];
    publicaciones_actualizadas[pub_key] = [
      ...publicaciones[pub_key]
    ];
    publicaciones_actualizadas[pub_key][comment_key] = actualizada;

    dispatch({
      type: COMMENT_ACTUALIZAR,
      payload: publicaciones_actualizadas
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: COMMENT_ERROR,
      payload: 'Comentarios no disponibles'
    });
  }
};
