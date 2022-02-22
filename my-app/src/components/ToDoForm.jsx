import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
// import { addToDo, removeAll, removeTask } from '../store/actions';
import './ToDoForm.scss';
import { addTodo } from '../store/index.js';


const ToDoForm = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(addTodo({ text: value }));
        }
    }

    return (
        <div className="form">
            <input
                onChange={handleChange}
                value={value}
                placeholder="Add your new todo"
                className="form__input"
                type="text"
            >
            </input>
            <button onClick={addTask} className="form__btn">+</button>
        </div>
    )
}

export default ToDoForm;