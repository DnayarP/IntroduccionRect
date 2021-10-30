import React from "react";
import { TodoContext } from '../TodoContext'
import './todoForm.css';


function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        AddTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onCancel =()=>{
        setOpenModal(false);
    };
    const onChange= (event)=>{
        setNewTodoValue(event.target.value);
    };
    const onSubmit =(event)=>{
       event.preventDefault();
       AddTodo(newTodoValue);
       setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="cortar la cebolla apra el almuerzo" />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button-cancel" type="button" onClick={onCancel}>cancelar</button>
                <button className="TodoForm-button-add" type="submit" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};