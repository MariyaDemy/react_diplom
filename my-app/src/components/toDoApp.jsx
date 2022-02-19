import { useDispatch, useSelector, } from "react-redux";
import { selectTodos } from "../store/selectors";
import { useEffect, useState } from 'react';
import { addToDo, removeAll, removeTask } from '../store/actions';
import './toDoApp.scss';

//delete button won't work

const ToDoApp = () => {

    const todos = useSelector(selectTodos);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const addTask = (e) => {
        dispatch(addToDo({ id: Math.floor(Math.random() * 100), todos: value }));

    }

    const deleteAll = (e) => {
        dispatch(removeAll({}));
    }

    const deleteTask = (e) => {
        dispatch(removeTask({ todos: setValue }));
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List App</h1>
            <div className="form">
                <input onChange={handleChange}
                    value={value}
                    placeholder="Add your new todo"
                    className="form__input"
                    type="text"
                    multiple
                >
                </input>
                <button onClick={addTask} className="form__btn">+</button>
            </div>
            {todos.map(item => <div className="tasklist" key={item.id}>
                <p className="tasklist__text">{item.todos}{item.id}</p>
                <button onClick={deleteTask} className="tasklist__btn_del">╳</button>
            </div>)}
            <div className="tasklist__block">
                You have <span className="tasklist__count">{todos.length}</span> pending tasks
                <button onClick={deleteAll} className="tasklist__btn_all">Clear all</button>
            </div>
        </div>
    )
}

export default ToDoApp;