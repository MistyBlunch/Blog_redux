import React from "react";

import { Link } from "react-router-dom";

const Menu = () => (
  <nav id="menu">
    <div>
      <Link to="/">Usuarios</Link>
      <Link to="/tareas">Tareas</Link>
    </div>
  </nav>
);

export default Menu;
