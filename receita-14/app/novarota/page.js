import React from 'react';
import { MariaPrea } from "./componentes";
import { MariaPrea2 } from "./componentes2";
import { MariaPrea3 } from "./componentes/componentes3";
import { Home2 } from "./componentes/page";
import { NewFunction } from "../page";



export default function NovaRotaHome(){

    return (

       <div>
          
          <NewFunction/>
          <Home2/>

          <h1>Nova Rota, Nova Página</h1>

          <MariaPrea/>
          <MariaPrea2/>
          <MariaPrea3/>

       </div>

    )

}