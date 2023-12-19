import { useState } from "react";

const ButtonState = () =>{

    const [sum , setSum] = useState(0);
    const [rest, setRest] = useState(20);


    const handleClick = () => {
        setSum(sum + 1);
    }

    const handleRest = () => {
        setRest(rest -1);
    };

    return(
        <>
            <button onClick={handleClick} className="btn btn-primary ml-5">Sumando: {sum} </button>
            <button onClick={handleRest} className="btn btn-primary">Restando: {rest} </button>
        </>
    )
}

export default ButtonState