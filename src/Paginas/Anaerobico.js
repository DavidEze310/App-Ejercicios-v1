import React,{Component} from 'react';
import '../Component/Style/Anaerobico.css';
import FormularioAN from '../Component/Formularios/FormularioAN'
import {EjemplosAn} from '../Component/Ejemplos/EjemplosAN.json';
import BotonAtras from '../Component/Botones/BotonAtras'; 


export default class Anaerobico extends Component{
    constructor(){
        super();
        this.state = {
            EjemplosAn
        };
        this.addAn = this.addAn.bind(this);
    }
    addAn(Ejemploan){
        this.setState({
            EjemplosAn:[...this.state.EjemplosAn, Ejemploan]
        })
        console.log(this.state.EjemplosAn);
    }
    borrarAn(index) {
        if(window.confirm('¿Estas seguro?')){
            this.setState({
                EjemplosAn:this.state.EjemplosAn.filter((e, i) => {
                    return i !== index
                })
            })
        }  
    }
    render(){
        const EjemplosAn= this.state.EjemplosAn.map((Ejemploan, i) => {
            return(
                <div className="col-md-4 text-center" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h4>{Ejemploan.Dia}</h4>
                        </div>
                        <div className="card-body">
                            <p className="font-weight-bold float-left">Ejercicio:</p><p>{Ejemploan.Ejercicio}</p><br/>
                            <p className="font-weight-bold float-left">Series</p><p>{Ejemploan.Series} </p><br/>
                            <p className="font-weight-bold float-left">Repeticiones</p><p>{Ejemploan.Repeticiones} </p><br/>
                            <p className="font-weight-bold float-left">Peso</p><p>{Ejemploan.Peso} </p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-danger float-right" onClick={this.borrarAn.bind(this, i)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="body-an">
                <BotonAtras/>
                <h1 className="text-center display-4 font-italic font-weight-bold">Anaerobico</h1>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <FormularioAN agregarAn={this.addAn}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {EjemplosAn}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}