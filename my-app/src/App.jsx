import './App.scss';
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import TotalCount from './components/TotalCount';
import ReactDOM from 'react-dom';
import DateComponent from './components/DateComponent';


const App = () => {
    return (
        <Provider store={store}>
            <div className='todo'>
                <h1 className="todo__title">To Do List App</h1>
                <DateComponent></DateComponent>
                <ToDoForm></ToDoForm>
                <ToDoList></ToDoList>
                <TotalCount></TotalCount>
            </div>
        </Provider>
    )
}

export default App;