import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

import * as usuariosAction from "../../actions/usuariosAction";

class Usuarios extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal error={this.props.error} />;
    }

    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Corre</th>
            <th>Enlace</th>
          </tr>
        </thead>

        <tbody>{this.ponerFilas()}</tbody>
      </table>
    );
  };

  ponerFilas = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    return <div>{this.ponerContenido()}</div>;
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosAction)(Usuarios);
