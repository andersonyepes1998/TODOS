import { useEffect, useState } from "react";
import Controlado from "./components/Controlado";
import Todos from "./components/Todos";

//Este es el que gurada los datos en el localStore y adicional hay que dejarlo por fuera de componente para que se llame de primero...
const initialSateTodos = JSON.parse(localStorage.getItem('todos')) || [];
//Este es el que gurada los datos en el localStore y adicional hay que dejarlo por fuera de componente para que se llame de primero...

const App = () =>{

    // const colleg = ['🧤', '🧨', '🎏'];
    // const collegTwo =['🎞', '🎑', '🎪'];

    const [todos, setTodos] = useState(initialSateTodos);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));

    },[todos]);

    const addTodos = todo => {
        setTodos([...todos, todo]);
    }

    const deleteTodos = (id) =>{
        const newArrays = todos.filter(item => item.id !== id)
        setTodos(newArrays);
    }

    const updateTtodos =  (id) => {
        const newArrays = todos.map(item =>  {
            if(item.id === id){
                item.state = !item.state
            }
            return item;
        });
        setTodos(newArrays)
    }

    const orderTodo = (arraysTodos) => {
        return arraysTodos.sort((a,b)=>{
            if(a.priority === b.priority) return 0;
            if(a.priority) return -1;
        })
    }

    return (
        <>
            <div className="body">
                <div className='container bg-light p-2 rounded shadow p-3 mb-5 bg-white rounded'>
                    <h1 className="text-center my-5 text-danger">Formulario Controlado</h1>
                    <Controlado addTodos={addTodos}/>
                    <Todos 
                        todos={orderTodo(todos)} 
                        deleteTodos={deleteTodos} 
                        updateTodos={updateTtodos} 
                    />
                </div>
            </div>


            {/* <div className='container'>
                <h1 className="text-center">Formularios No Controlados</h1>
                <NoControlado/>
            </div> */}
            {/* <div className='container mt-5'>
                <ButtonState/>
                <h1>Hola soy React</h1>
                <Cat/>
                <MyButton text='carros'  />
                <MyButton text='perros'  />
                <MyButton text='juegos'  />
                <ListColleg colleg={colleg} />
                <ListColleg colleg={collegTwo} />
            </div> */}
        </>
    )
}

export default App;