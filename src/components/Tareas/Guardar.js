import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

import { Redirect } from 'react-router-dom';

import * as tareasActions from '../../actions/tareasActions';

class Guardar extends Component {
  handleChange = (e) => {
    this.props.changeInput(e.target.name, e.target.value);
  }

  guardar = () => {
    const { user_id, titulo, agregar } = this.props;
    const nueva_tarea = {
      userId: user_id,
      title: titulo,
      completed: false
    };
    agregar(nueva_tarea);
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