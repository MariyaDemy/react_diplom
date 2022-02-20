import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.scss'
import { useSelector } from "react-redux";
import { selectTodos } from "../store/selectors";

const ToDoList = () => {

    const todos = useSelector(selectTodos);

    return (
        <ul className='list'>
            {todos.map((todo) => (
                <ToDoItem id={todo.id} text={todo.text} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default ToDoList;