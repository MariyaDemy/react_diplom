import React, { useEffect } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.scss'
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../store/selectors";
import { getInfoAsync } from '../store/actions';

const ToDoList = () => {

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

    useEffect(() => {
        dispatch(getInfoAsync());
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);




    return (
        <ul className='list'>
            {todos.map((todo) => (
                <ToDoItem id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} name={todo.name} />
            ))}
        </ul>
    );
};

export default ToDoList;