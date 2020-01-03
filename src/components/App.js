import React from "react";

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>Grace</td>
      <td>grcenikole@gmail.com</td>
      <td>mistyblunch.com</td>
    </tr>,
    <tr>
      <td>Platzi</td>
      <td>platzi@gmail.com</td>
      <td>platzi.com</td>
    </tr>
  ];

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Corre</th>
            <th>Enlace</th>
          </tr>
        </thead>

        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default App;
