import React from 'react'
import { connect } from 'react-redux'
import "../styles/Jugadores.css"

const mapStateToProps = state => ({
    jugadores: state.jugadores
})


const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type:"AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTE",
            jugador
        })
    }
})
function Jugadores({jugadores,agregarTitular,agregarSuplente}){
    return (
    <div>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {jugadores.map((j) => (
                <div className="jugador " key={j.id}>
                <img src={j.foto}  alt={j.nombre} />
                <h3>{j.nombre}</h3>
                <div className="btns">
                    <button onClick={()=>agregarTitular(j)} className="btn-presente">Presente</button>
                    <button onClick={()=>agregarSuplente(j)} className="btn-ausente">Ausente</button>
                </div>
            </div>
            ))
        }
        </div>
    </div>
)
}

// const Jugadores = (jugadores) => {
    
// }

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)
