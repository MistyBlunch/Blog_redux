import React, { Component } from "react";
import axios from "axios";

class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.setState({
      usuarios: response.data
    });
  };

  ponerFilas = () =>
    this.state.usuarios.map(usuario => (
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

export default Usuarios;
