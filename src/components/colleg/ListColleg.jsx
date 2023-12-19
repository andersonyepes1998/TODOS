import ItemsColleg from "./ItemsColleg"

// eslint-disable-next-line react/prop-types
const ListColleg = ( {colleg} ) =>{

    // const colleg = ['🧤', '🧨', '🎏'];

    return(
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                colleg.map((item, index)=> {
                    return(
                        <ItemsColleg key={index} colle={item} />
                    )
                })
            }
        </ul>
    )
} 
export default ListColleg