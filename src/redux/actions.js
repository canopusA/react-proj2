import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK, SET_FILTER, SET_SEARCH_QUERY } from './actionTypes';

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSearchQuery = (query) => ({ type: SET_SEARCH_QUERY, payload: query });