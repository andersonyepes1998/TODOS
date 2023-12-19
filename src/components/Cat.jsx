import { useState } from "react";

const Cat = () =>{

    const [cat, setCat] = useState({
        name: "ander",
        year: 10
    });
    
    const handleNext = () => {
        setCat({...cat, year: cat.year + 1}); 
    }

    return(

        <>
            <h4>El gato tiene como nombre {cat.name}</h4>
            <h4>La edad del gato es - {cat.year}</h4>
            <button className="btn btn-primary mb-2" onClick={handleNext}>
                Modificar el año
            </button>
        </>
    )
}

export default Cat;
