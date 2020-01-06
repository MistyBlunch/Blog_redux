import React, { Component } from "react";
import { connect } from "react-redux";

import * as usuariosAction from "../../actions/usuariosAction";

class Usuarios extends Component {
  componentDidMount() {
    // this.getData();
    this.props.traerTodos();
  }

  ponerFilas = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    console.log(this.props.cargando);
    console.log(this.props.error);
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosAction)(Usuarios);
