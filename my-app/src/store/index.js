import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore, createSlice} from '@reduxjs/toolkit';
import { getInfoAsync} from './actions';


export const todoSlice = createSlice({

	 // A name, used in action types
	name: 'todos',

	initialState: [],

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

	extraReducers: (builder) => {
		    builder.addCase(getInfoAsync.fulfilled, (state, action) => {
				state.push(action.payload[1], action.payload[18], action.payload[23])
		  })
		}


});


export const { 
	addTodo,
	toggleTodo,
	removeTodo,
	removeAll,
	removeCompleted

 } = todoSlice.actions;


export const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});