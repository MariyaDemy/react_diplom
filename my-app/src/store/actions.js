import {ADD, REMOVE, CHANGE} from './actionTypes';


export const addToDo = (data) => ({type: ADD, payload: data});
export const removeAll = (data) => ({type: 'REMOVE_ALL', payload: data});
export const removeTask = (id) => ({type: REMOVE, payload: id});