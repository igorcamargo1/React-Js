import React from 'react'
import Tarefa from './Tarefa'
import styled from 'styled-components'
import { useState } from 'react'

const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

export default function ListaTarefas() {
    
    const [tarefa, setTarefa] = useState([
        {
            titulo:"Lista de Pagamento",
            setor:"Dep.vendas",
            descricao:"Levantar os valores de vendas"
        },
        {
            titulo:"Planilha de salarios",
            setor:"Dep. Pessoal",
            descricao:"Gerar planilhas"
        },
        {
            titulo:"Lanças notas do challenge",
            setor:"Graduação",
            descricao:"Lançar notas dos grupos no portal"
        }
    ])
    
    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = ()=>{
        
        const novaTarefa={
            titulo:"Planilha de notas",
            setor:"Graduação",
            descricao:"Lançar quem não fez exercicios"
        }

        setTarefa([...tarefa, novaTarefa])
    }


    return (
        <div>
            <p>lista de tarefas</p>
            <div>
                <button onClick={addTarefa}>Add-tarefa</button>
            </div>
            <DivLista>
                {tarefa.map((t,i)=>
                <Tarefa
                    key={i}
                    id={i+1}
                    titulo={t.titulo}
                    setor={t.setor}
                    descricao={t.descricao}
                />
                )}
            </DivLista>
            <p>lista de tarefas</p>
        </div>
    )
}
