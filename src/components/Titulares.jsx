import React from 'react'
import {connect} from "react-redux"
import "../styles/Titulares.css"

function  Titulares({titulares,quitarTitular}) {
return (

    <div>
        <h2>presentes</h2>
        <div className="titulares">
            {
                titulares.map(j=>(
                    <div className="titular" key={j.id}>
                        <button onClick={()=>quitarTitular(j)}>x</button>
                        <img src={j.foto} alt={j.nombre} />
                        <p>{j.nombre}</p>
                    </div>
                    ))
                }
            </div>
    </div>
  
  )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type:"QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)