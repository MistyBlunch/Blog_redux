import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

// Conectar actions al Componente
import * as tareasActions from '../../actions/tareasActions'

class Tareas extends Component {
  componentDidMount() {
    this.props.traerTodas();
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props;

    if (error) {
      return <Fatal mensaje={error} />
    }

    if (cargando) {
      return <Spinner />
    }

    return Object.keys(tareas).map((user_id) => (
      <div key={user_id}>
        <h2>
          Usuario {user_id}
        </h2>
        <div className="contenedor_tareas">
          {this.ponerTareas(user_id)}
        </div>
      </div>
    ))
  };

  ponerTareas = (user_id) => {
    const { tareas } = this.props;
    const por_usuario = {
      ...tareas[user_id]
    };

    return Object.keys(por_usuario).map((tar_id) => (
      <div key={tar_id}>
        <input type="checkbox" defaultChecked={por_usuario[tar_id].completed} />
        {
          por_usuario[tar_id].title
        }
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button>
          <Link to='/tareas/guardar'>
            Agregar
          </Link>
        </button>
        {this.mostrarContenido()}
      </div>
    )
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas)