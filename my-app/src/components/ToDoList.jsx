import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.scss'
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../store/selectors";
import { getInfoAsync } from '../store/actions';


const ToDoList = () => {

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos); //state.todos

    useEffect(() => {
        dispatch(getInfoAsync());
    }, [dispatch]);




    // const [local, setLocal] = useState(
    //     JSON.parse(localStorage.getItem("tasks")) || []
    // )

    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(todos));
    // }, [todos]
    // );







    return (
        <ul className='list'>
            {todos.map((todo) => (
                <ToDoItem id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} name={todo.name} />
            ))}
        </ul>
    );
};

export default ToDoList;