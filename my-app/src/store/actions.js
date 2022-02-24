import {ADD, REMOVE} from './actionTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const addToDo = (data) => ({type: ADD, payload: data});
export const removeAll = (data) => ({type: 'REMOVE_ALL', payload: data});
export const removeTask = (id) => ({type: REMOVE, payload: id});


// get async actions
export const getInfoAsync = createAsyncThunk (
	'todos',
	async () => {
		let response = await fetch('https://api.punkapi.com/v2/beers');
		if (response.ok) {
			let result = await response.json();
			// result[0].completed = false;
			result.forEach(function(item, index){
				this[index].completed = false;
			}, result)
			return result;
		}
	}
);

