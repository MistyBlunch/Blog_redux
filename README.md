# Blog Redux

Requirements:
* Node v.10

How to run:
```
npm i
```

```
npm run start
```
![Screenshot 2023-12-31 013306](https://github.com/MistyBlunch/Blog_redux/assets/29315728/67a360aa-6804-4795-9ab1-435430080d03)
![Screenshot 2023-12-31 013328](https://github.com/MistyBlunch/Blog_redux/assets/29315728/88549dad-074a-424e-b381-5b89329de531)
![Screenshot 2023-12-31 013353](https://github.com/MistyBlunch/Blog_redux/assets/29315728/c00261bc-8ca0-480f-827d-54a76b2f48ec)



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
