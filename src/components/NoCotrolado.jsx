import { useRef, useState } from "react";

const NoControlado = ()=> {

    const[info, setInfo] = useState('');

    const form = useRef(null);

    const handleSumit = (e) => {
        e.preventDefault();
        setInfo('');

        //capturar los datos...
        const data = new FormData(form.current);
        const { tittle,description,state } = Object.fromEntries([...data.entries()]);

        //Validar los datos...

        if(!tittle.trim() && !description.trim() || !state.trim()) {
          return setInfo('Debes de llenar el campo');
        }

        console.log(tittle,description,state);

        //Enviar los datos...

    }

    return(
        <form onSubmit={ handleSumit } ref={form} >
            <input 
                type="text" 
                placeholder="Ingrese el Todo" 
                className="form-control mb-2"
                name="tittle"
                defaultValue={'Grandesa colombiana'}
            />
            <p className="text-danger m-20">{info !== '' && info}</p>
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese descripción" 
                name="description"
                defaultValue={'es muy grande en la vida...'}
            />
            <p className="text-danger m-20">{info !== '' && info}</p>
            <select className="form-select mb-2" name="state" defaultValue={'completado'}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <p className="text-danger m-20">{info !== '' && info}</p>
            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    )
}

export default NoControlado