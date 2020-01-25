import React, { Component } from 'react';
import { connect } from 'react-redux';

// Conectar actions al Componente
import * as tareasActions from '../../actions/tareasActions'

class Tareas extends Component {
  componentDidMount() {
    this.props.traerTodas();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Tareas Saludar
      </div>
    )
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas)