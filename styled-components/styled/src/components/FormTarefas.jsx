import React from "react";

export default function FormTarefas(props) {
    return (
        <div>
            <form method="POST" onSubmit={props.adicionarNovaTarefa}>
                <fieldset>
                    <legend>Tarefas</legend>
                    <div>
                        <input type="text" name="titulo" placeholder='Titulo...' value={props.novaTarefa.titulo} onChange={props.digit}/>
                    </div>
                    <div>
                        <input type="text" name="setor" placeholder="setor..." value={props.novaTarefa.setor} onChange={props.digit}/>
                    </div>
                    <div>
                        <textarea name="descricao" cols="30" rows="10" placeholder="Descrição..." value={props.novaTarefa.descicao} onChange={props.digit}></textarea>
                    </div>
                    <button type="submit">Adicionar</button>
                </fieldset>

            </form>

        </div>
    )
}
