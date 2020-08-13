import React from 'react';
import './Style/Botones.css'

function Bienvenida (props){
            return(
                <div className="container">
                    <div className="Informacion">
                        <h1>Bienvenido {props.usuario}!</h1>
                        <p>Que ejercicio hisiste hoy?</p>
                    </div>
                </div>
            )
}
export default Bienvenida