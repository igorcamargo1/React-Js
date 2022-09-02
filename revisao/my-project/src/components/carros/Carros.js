import React from "react";
import Carro from '../../img/Carro.png'


export default function Carros(){
    
    return(
        <>
            <img src={Carro} alt="" width='250px'/>
            <li>Camaro</li>
            <li>Ferrari</li>
            <li>Audi TT</li>
            <li>Mercedes AMD</li>
            <li>Porsche </li>
        </>

    )
}