import React from'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from '../Paginas/Inicio';
import Aerobico from '../Paginas/Aerobico';
import Anaerobico from '../Paginas/Anaerobico';
import NotFound from '../Paginas/NotFound'


function Enlaces (){
    return(
        <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Inicio}/>
               <Route exact path="/Aerobico"component={Aerobico}/>
               <Route exact path="/Anaerobico"component={Anaerobico}/>
               <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Enlaces