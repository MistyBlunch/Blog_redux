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
