import styled from "styled-components"

export const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

export const DivTarefa = styled.div`
    background-color:#ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding:2vh 2vw ;
    text-align:center;
    width: 50vw;
    height: 20vh;
    margin: 5vh 30vw;
    h2,p{ padding-bottom:10px; }
`

export const BotaoFechar = styled.button`
    max-width: 4vw;
    max-height: 4vh;
    color: #fff;
    background-color: green;
    border: 1px solid #000000;
    padding: 2%;
    display: block;
    &:hover {
        background-color: blue;
    }
`