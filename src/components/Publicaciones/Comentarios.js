import React from "react";
import { connect } from 'react-redux' // Para conectar con REDUX
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

const Comentarios = props => {
  if (props.comment_error) {
    return <Fatal mensaje={props.comment_error} />
  }

  if (props.comment_cargando && !props.comentarios.length) {
    return <Spinner />
  }

  const ponerComentarios = () => (
    props.comentarios.map((comentario) => (
      <li key={comentario.id}>
        <b>
          <u>
            {comentario.email}
          </u>
        </b>
        <br />
        {comentario.body}
      </li>
    ))
  );

  return (
    <ul>
      {ponerComentarios()}
    </ul>
  );
};

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer

export default connect(mapStateToProps)(Comentarios)