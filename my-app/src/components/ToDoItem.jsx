import React from 'react';
import './ToDoItem.scss'
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/index.js';




const ToDoItem = ({ id, text, completed, name }) => {

    const dispatch = useDispatch();

    const toggleCheckbox = (e) => {
        dispatch(toggleTodo({ id, completed: !completed }))
    }

    const removeTask = (e) => {
        dispatch(removeTodo({ id }))
    }

    return (
        <li>
            <div className="tasklist">
                <div className='tasklist__row'>
                    <input onChange={toggleCheckbox} className="tasklist__checkbox" type='checkbox' checked={completed}></input>
                    <p className="tasklist__text">{name} {text}</p>
                </div>
                <button onClick={removeTask} className="tasklist__btn_del">╳</button>
            </div>
        </li>
    );
};

export default ToDoItem;