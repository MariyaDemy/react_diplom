import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addGood, changeGoods, addToDo } from './actions';
import {ADD, REMOVE, CHANGE} from './actionTypes';
import { configureStore, createSlice } from '@reduxjs/toolkit';



export const todoSlice = createSlice({

	 // A name, used in action types
	name: 'todos',

	initialState: [
		{ id: 1, text: 'todo1', completed: false },
		{ id: 2, text: 'todo2', completed: false },
		{ id: 3, text: 'todo3', completed: true },
		{ id: 4, text: 'todo4', completed: false },
		{ id: 5, text: 'todo5', completed: false },
	],

	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: Math.floor(Math.random() * 1000),
				text: action.payload.text,
				completed: false,
			};
			state.push(todo);
		},

		toggleTodo: (state, action) => {
			const i = state.findIndex((item) => item.id === action.payload.id);
			state[i].completed = action.payload.completed;
		},

		removeTodo: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id)
		},
		// return as the filter function gives a new array back

		removeAll: (state, action) => {
			state.length = 0;
		},

		removeCompleted: (state, action) => {
			return state.filter((item) => item.completed === false)
		}
	},
});


export const { addTodo, toggleTodo, removeTodo, removeAll, removeCompleted } = todoSlice.actions;

//const store = was just default

export const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});