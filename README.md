###### setState -> te permite traer el estado actual. Si decido sacar el estado, debo hacerlo desde mis Actions:

```
export const publicacionesEstados = () => (dispatch) => {
  const { publicaciones } = getState().publicacionesReducer;
};
```

###### connect -> connect(REDUCERS, ACTIONS) (COMPONENT)

###### Si quieres exportar un ACTION debes usar dos funciones, en la segunda siempre el dispatch va como parámetro, por ejemplo:

```
export const whatever = () => (dispatch) => {
  ...
};
```

###### Si vas a agregar un Action func no olvides añadirlo en el _mapDispatchToProps_

###### Si quieres conectar el Action con el component lo haces: 
```
import * as tareasActions from '../../actions/tareasActions'
```