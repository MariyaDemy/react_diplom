import React from 'react';
import './TotalCount.scss'
import { useDispatch, useSelector } from 'react-redux';
import { countTodos, selectTodos } from "../store/selectors";
import { removeAll, removeCompleted } from '../store/index.js';


const TotalCount = (props) => {

    const todos = useSelector(countTodos);
    const todosAll = useSelector(selectTodos);
    const dispatch = useDispatch();

    const removeTasks = (e) => {
        dispatch(removeAll({}));
    }

    const deleteCompleted = (e) => {
        dispatch(removeCompleted({}));
    }


    return (
        <div className='taskcount'>

            <div className='taskcount__block'>
                Tasks in progress : <span className="taskcount__inprogress">{todosAll.length}</span>
            </div>
            <div className='taskcount__block'>
                Completed tasks : <span className='taskcount__completed'> {todos.length}</span>
            </div>
            <button onClick={deleteCompleted} className="taskcount__btn">🗑️ Completed</button>
            <button onClick={removeTasks} className="taskcount__btn">🗑️ All</button>

        </div>

    )
};

export default TotalCount;

// tasklist__count">{todos.length}</span>