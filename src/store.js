import { createStore } from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://i.pinimg.com/originals/31/40/a2/3140a24e365955bff10bb272fb8f1e5d.png"
    },
    {
        id: 2,
        nombre: "Manuel Lecaros",
        foto: "https://i.pinimg.com/originals/31/40/a2/3140a24e365955bff10bb272fb8f1e5d.png"
    },
    {
        id: 3,
        nombre: "Erick Astudillo",
        foto: "https://i.pinimg.com/originals/31/40/a2/3140a24e365955bff10bb272fb8f1e5d.png"
    },
    {
        id: 4,
        nombre: "Mauricio Muñoz",
        foto: "https://i.pinimg.com/originals/31/40/a2/3140a24e365955bff10bb272fb8f1e5d.png"
    }

    ],
    titulares: [],
    suplentes: []

}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }

    }
    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }

    }
    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }

    }
    console.log(action);
    return state
}


export default createStore(reducerEntrenador)