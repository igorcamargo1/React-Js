import Item from "../item/Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" />
            <Item marca="Fiat"/>
            <Item marca="Renaut"/>
        </ul>
        </>
    )
}

export default List