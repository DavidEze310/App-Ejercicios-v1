import React,{Component} from 'react';

export default class FormularioAN extends Component{
    constructor(){
        super();
        this.state={
            Dia:'Lunes',
            Ejercicio:'',
            Distancia:''
        };
        this.entradaAe = this.entradaAe.bind(this);
       this.salidaAe = this.salidaAe.bind(this);
    }

    entradaAe(e){
        const {value, name}=e.target;
        this.setState({
            [name]: value
        })
    }

    salidaAe(e){
        e.preventDefault();
        this.props.agregarAefor(this.state)
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.salidaAe}>
                    <div className="form-group">
                        <select name="Dia" className="form-control" onChange={this.entradaAe}>
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
                        <input type="text" name="Ejercicio" className="form-control" onChange={this.entradaAe} placeholder="Que ejercicio hiciste?" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="Distancia" className="form-control" onChange={this.entradaAe} placeholder="Cuantas distancia recorriste?" />
                    </div>
                    <button type="submit" className="btn btn-outline-info">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}