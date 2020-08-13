import React from 'react';
import anaerobicoImg from '../Imagenes/Anaerobico.png';
import circulosImg from '../Imagenes/circulos.png';
import '../Style/Botones.css';
import {Link} from 'react-router-dom'

export default function BotonAna (props){
        return(
            <Link to="/Anaerobico" className="btn btn-ligth">
                <div className="card mx-auto Carta" 
            style={{
                backgroundImage:`url(${circulosImg}), linear-gradient(to right, #ff0000, #ff6600)`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={anaerobicoImg} className="float-rigth"/>
                        </div>
                        <div className="col-6 Info-Carta">
                            <h1 className="text-white Carta-h1">Ejercicios Anaerobicos</h1>
                            <p className="text-white Carta-p">Consiste en realizar actividades que precise mucho esfuerzo durante poco tiempo.<br/>
                   Por ejemplo:Levantamiento de pesas, carreas cortas a gran velocidad, abdominales. </p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        )
}