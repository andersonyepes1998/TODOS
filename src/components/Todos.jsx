
import Todo from "./Todo"
// eslint-disable-next-line react/prop-types
const Todos = ({ todos, deleteTodos, updateTodos }) => {

    return(
        <>
            <div className="mt-3">
                <h2 className="text-center text-danger">Todos</h2>
                <ul className="list-group">
                    {
                        // eslint-disable-next-line react/prop-types
                        todos.map((item) => (
                            <Todo 
                                key={item.id} 
                                todo={item} 
                                deleteTodos={deleteTodos}
                                updateTodos={updateTodos} 
                            />
                        ))
                    }
                    {
                        // eslint-disable-next-line react/prop-types
                        todos.length === 0  && (
                            <li className="list-group-item text-center">Sin Todos</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Todos