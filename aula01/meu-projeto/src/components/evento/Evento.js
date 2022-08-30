import Button from "../button/Button"

function Evento({numero}){
    
    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }

    function segundoEveneto(){
        console.log('Ativando segindo evento')
    }
    
    return(
        <div>
            <p>Clique para ativar um evento</p>
            <Button event={meuEvento} text='Primeiro Evento'/>
            <Button event={segundoEveneto} text='Segundo evento'/>
        </div>
    )
}

export default Evento