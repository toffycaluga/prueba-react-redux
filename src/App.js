import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from "./components/Jugadores"
import EquipoSeleccionado from './components/EquipoSeleccionado';

// import "./styles/styles.scss"
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Prueba Asistencia Cadetes</h1>
        <Jugadores />
        <EquipoSeleccionado />

      </div >
    </Provider>
  )
}

// const App = () => {
//   <Provider store={store}>
//   <>
//     <h1>EDmanager</h1>
//     <Jugadores />
//     <EquipoSeleccionado />
//   </>
//   // </Provider>
// }



export default App;
