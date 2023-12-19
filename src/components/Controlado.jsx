import { useState } from "react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Controlado = ({addTodos}) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false,
    })

    const {title, description, state, priority} = todo;
    
    const handleSumit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y Descripción obligatorios...",
              });
        }

        addTodos({
            id: Date.now(),
            ...todo,
            state: state === 'completado' ? true : false,
        })
        setTodo({
            title: '',
            description: '',
            state: 'pendiente',
            priority: false,
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todos agregados correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleChage = (e) =>{
        let data = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        let dataName = e.target.name
        setTodo({...todo, [dataName]: data})
    }

    return(
        <form onSubmit={ handleSumit } >
        <input 
            type="text" 
            placeholder="Ingrese el Todo" 
            className="form-control mb-2 "
            name="title"
            value={title}
            onChange={handleChage}
        />
        <textarea 
            className="form-control mb-2" 
            placeholder="Ingrese descripción" 
            name="description"
            value={description}
            onChange={handleChage}
        />
        <div className="text-center">
            <div className="form-check d-inline-block">
                <input 
                    type="checkbox" 
                    name="priority" 
                    className="form-check-input" 
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChage}
                />
                <h5 htmlFor="inputCheck" className="text-primary">Prioridad</h5>
            </div>
        </div>
        <select 
            className="form-select mb-2" 
            name="state" 
            value={state} 
            onChange={handleChage}
        >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        <div className="col text-center">
            <button type="submit" className="btn btn-outline-primary">Agregar Todos</button>
        </div>
    </form>
    )
}

export default Controlado