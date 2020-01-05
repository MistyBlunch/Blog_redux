import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

class Usuarios extends Component {
  // componentDidMount() {
  //   this.getData();
  // }

  // getData = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  //   this.setState({
  //     usuarios: response.data
  //   });
  // };

  ponerFilas = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
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

export default connect(mapStateToProps, {
  /* Actions*/
})(Usuarios);
/* dentro de connect irán todos los reducers 
que el proveedor entregará al usuario*/
