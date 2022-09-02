import React from "react";

export default function Parceiros(props){

    return(
        <>
            <h2>Entre em contato com nosso parceiros</h2>
            <span>{props.mult()}</span>
            <br/>
            <a href="#Ferrari">Ferrari</a>
            <a href="#Audi">Audi</a>
            <a href="#Mercedez">Mercedez</a>
            <a href="#Porsche">Porsche</a>
        </>
    )
}