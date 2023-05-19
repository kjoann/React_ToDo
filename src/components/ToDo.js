import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div className='icons'>
                <FontAwesomeIcon className='icon1' icon={faPenSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className='icon2' icon={faTrashAlt} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    );
};
export default Todo;