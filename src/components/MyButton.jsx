
/* eslint-disable react/prop-types */

const MyButton = (props) =>{
    const handleClick = (text)=>{
        console.log('Me has dado click en el boton de ', text);
    }
  
    return (
        <button onClick={() => handleClick(props.text)}>
            {props.text}
        </button>
    )
}
export default MyButton