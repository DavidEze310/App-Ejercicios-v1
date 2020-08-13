import React,{Component} from 'react';

export default class FormularioAN extends Component{
    constructor(){
        super();
        this.state={
            Dia:'Lunes',
            Ejercicio:'',
            Series:'',
            Repeticiones:'',
            Peso:''
        };
        this.entradaAn = this.entradaAn.bind(this);
        this.salidaAn = this.salidaAn.bind(this);
    }
    entradaAn(e){
        const {value, name}=e.target;
        this.setState({
            [name]: value
        })
    }
    salidaAn(e){
        e.preventDefault();
        this.props.agregarAn(this.state)
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.salidaAn}>
                    <div className="form-group">
                        <select name="Dia" className="form-control" onChange={this.entradaAn}>
                            <option>Lunes</option>
                            <option>Martes</option>
                            <option>Miercoles</option>
                            <option>Jueves</option>
                            <option>Viernes</option>
                            <option>Sabado</option>
                            <option>Domingo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Ejercicio" className="form-control" onChange={this.entradaAn} placeholder="Que ejercicio hiciste?" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Series" className="form-control" onChange={this.entradaAn} placeholder="Cuantas series?" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Repeticiones" className="form-control" onChange={this.entradaAn} placeholder="Y las Repeticiones?" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Peso" className="form-control" onChange={this.entradaAn} placeholder="Con cuanto peso?" />
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}