import React from 'react';
import BotonAer from '../Component/Botones/BotonAer';
import BotonAna from '../Component/Botones/BotonAna';
import Bienvenida from'../Component/Bienvenida';

export default class Inicio extends React.Component{
    
    render(){
        
        return(
            <div>
                 <Bienvenida usuario='David'/>
                <div className="text-center">
                    <BotonAer/>
                    <BotonAna/>
                </div>
            </div>
        )
    }
}