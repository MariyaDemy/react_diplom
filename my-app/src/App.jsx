import './App.scss';
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import ToDoApp from './components/toDoApp';

const App = () => {
    return (
        <Provider store={store}>
            <ToDoApp></ToDoApp>
        </Provider>
    )
}

export default App;