import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tareasActions from '../../actions/tareasActions'

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
        >
          Guardar
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar)