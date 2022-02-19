import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addGood, changeGoods, addToDo } from './actions';
import {ADD, REMOVE, CHANGE} from './actionTypes';



let initialState = { todos: [] };

let toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        }
        case REMOVE: {
            return {
                ...state, 
                todos: [...state.todos.filter(item => item.id !== action.payload.id)]
            }
        }
        case "REMOVE_ALL":{
            return {
                todos: []
            }
        }

        default:
            return state;
    }
}

// const rootReducer = combineReducers({
//   todoReducer: toDoReducer,
// })

export let store = createStore(toDoReducer);