
export default function Saudacao({ nome }){
    
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
    
    return(
        <>
            {nome &&/*se tiver algo em nome, imprima:*/<p>{gerarSaudacao(nome)}</p>}
        </>
    )
}