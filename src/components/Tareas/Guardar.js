import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import { Redirect } from 'react-router-dom';

import * as tareasActions from '../../actions/tareasActions';

class Guardar extends Component {
  componentDidMount() {
    const {
      match: { params: { usr_id, tar_id } },
      tareas,
      changeInput,
      limpiarForm
    } = this.props;

    if (usr_id && tar_id) {
      const tarea = tareas[usr_id][tar_id];
      changeInput('user_id', tarea.userId);
      changeInput('titulo', tarea.title)
    } else {
      limpiarForm();
    }
  }

  handleChange = (e) => {
    this.props.changeInput(e.target.name, e.target.value);
  }

  guardar = () => {
    const {
      match: { params: { usr_id, tar_id } },
      tareas,
      user_id,
      titulo,
      agregar,
      editar
    } = this.props;

    const nueva_tarea = {
      userId: user_id,
      title: titulo,
      completed: false
    };

    if (user_id && tar_id) {
      const tarea = tareas[usr_id][tar_id];
      const tarea_editada = {
        ...nueva_tarea,
        completed: tarea.completed,
        id: tarea.id
      };
      editar(tarea_editada);
    } else {
      agregar(nueva_tarea);
    }
  }

  deshabilitar = () => {
    const { user_id, titulo, cargando } = this.props;

    if (cargando) {
      return true;
    }
    if (!user_id || !titulo) {
      return true;
    }
    return false;
  }

  mostrarAccion = () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Spinner />
    }
    if (error) {
      return <Fatal mensaje={error} />
    }
  }

  render() {
    return (
      <div>
        {
          (this.props.regresar) ? <Redirect to='/tareas' /> : ''
        }
        <h1>
          Guardar Tarea
        </h1>
        Usuario id:
        <input
          type="number"
          name="user_id"
          value={this.props.user_id}
          onChange={this.handleChange}
        />
        <br /><br />
        Título:
        <input
          type="text"
          name="titulo"
          value={this.props.titulo}
          onChange={this.handleChange}
        />
        <br /><br />
        <button
          onClick={this.guardar}
          disabled={this.deshabilitar()}
        >
          Guardar
        </button>
        {this.mostrarAccion()}
      </div>
    )
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar)