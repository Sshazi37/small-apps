import React, { useState } from 'react'

function Todo() {
    const [value, setValue] = useState('');
    const [todos, setTodo] = useState([]);
    const [validation, setValidation] = useState('');


    function addTodo() {
        if (!value) {
            setValidation("Please Add Something")
        }
        if (value) {
            setTodo([...todos, value]);
            setValue('');
            setValidation("");
        }
    }


    function editTodo(index) {
        const editedTodo = todos[index];
        setValue(editedTodo);
        setTodo(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos.splice(index, 1);
            return updatedTodos;
        });
    }

    
    function delTodo(index){
        const del = [...todos];
        del.splice(index, 1);
        setTodo(del);
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline m-5">Todo App</h1>
            <div>
                <input className="placeholder-shown:border-black-500 border-2 rounded py-1 pl-2" placeholder="Go To Market" value={value} onChange={(e) => {setValue(e.target.value) }} id='todofield'/>
                <button className="text-white bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={addTodo}>Add Task</button>
                <div className='bg-red-500 w-60 m-auto mt-3'>{validation}</div>
            </div>

            {todos.map((todo, index) => {
                return(
                <div className='m-auto mt-5' key={index}>
                    <span>{todo}</span>
                    <button className="text-white bg-green-500 px-2 focus:outline-none hover:bg-green-800 rounded ml-2" onClick={()=>editTodo(index)}>Edit</button>
                    <button className="text-white bg-red-500 px-2 focus:outline-none hover:bg-red-800 rounded ml-2" onClick={()=>delTodo(index)}>Delete</button>
                </div>
                )
            })}



        </>
    )
}

export default Todo