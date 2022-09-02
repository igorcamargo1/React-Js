import React from "react";
import Carro from '../../img/Carro.png'


export default function Carros(props){
    
    return(
        <>
            <img src={Carro} alt="" width='250px'/>
            <li>{props.carros[0]}</li>
            <li>{props.carros[1]}</li>
            <li>{props.carros[2]}</li>
            <li>{props.carros[3]}</li>
            <li>{props.carros[4]}</li>
        </>

    )
}