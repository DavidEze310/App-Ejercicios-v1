import React,{Component} from 'react';
import {EjemplosAe} from '../Component/Ejemplos/EjemplosAE.json';
import '../Component/Style/Aerobico.css';
import FormularioAE from '../Component/Formularios/FormularioAE';
import BotonAtras from '../Component/Botones/BotonAtras';

export default class Aerobico extends Component{
    constructor(){
        super();
        this.state = {
            EjemplosAe
        };
        this.addAe = this.addAe.bind(this);
    }
    addAe(Ejemploae){
        this.setState({
            EjemplosAe:[...this.state.EjemplosAe, Ejemploae]
        })
    }
    borrarAe(index) {
        if(window.confirm('¿Estas seguro?')){
            this.setState({
                EjemplosAe:this.state.EjemplosAe.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }
    render(){
        const EjemplosAe = this.state.EjemplosAe.map((Ejemploae, i) =>{
            return(
                <div className="col-md-4 text-center" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h4>{Ejemploae.Dia}</h4>
                        </div>
                        <div className="card-body ">
                            <p className="font-weight-bold float-left">Ejercicio:</p><p>{Ejemploae.Ejercicio}</p><br/>
                            <p className="font-weight-bold float-left">Distancia:</p><p>{Ejemploae.Distancia}</p>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-outline-danger float-right" onClick={this.borrarAe.bind(this, i)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="body-ae">
                <BotonAtras/>
                <h1 className="text-center display-4 font-italic font-weight-bold">Aerobico</h1>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <FormularioAE agregarAe={this.addAe}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {EjemplosAe}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}