import React from 'react';
import aerobicoImg from '../Imagenes/Aerobico.png';
import circulosImg from '../Imagenes/circulos.png';
import '../Style/Botones.css'
import {Link} from 'react-router-dom'

export default function BotonAer (props){
    return(
         <Link to="/Aerobico" className="btn btn-ligth">
            <div className="card mx-auto Carta" 
        style={{
            backgroundImage:`url(${circulosImg}), linear-gradient(to right, #00ffd5, #0400ff)`
        }}>
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={aerobicoImg} className="float-rigth"/>
                    </div>
                    <div className="col-6 Info-Carta"> 
                        <h1 className="text-white Carta-h1">Ejercicios Aerobicos</h1>
                        <p className="text-white Carta-p">Es aquel ejercicio al que el cuerpo acude cuando nuestro organismo necesita quemar hidratos y grasas para producir energía.<br/>
               Por ejemplo:correr, nadar, montar en bici, etc. </p>
                    </div>
                </div>
            </div>
            </div>
        </Link>
    )
}