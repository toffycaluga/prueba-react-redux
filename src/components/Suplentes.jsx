import React from 'react'
import {connect} from "react-redux"
import "../styles/Suplentes.css"

function Suplentes({suplentes,quitarSuplente}){
    return(
        <div>
            <h2>ausentes</h2>
            <div className="suplentes">
                {
                    suplentes.map(j=>(
                        <div className="suplente"key={j.id}>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={()=>quitarSuplente(j)}>x</button>
                            <p>{j.nombre}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador){
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)