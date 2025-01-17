import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK, SET_FILTER, SET_SEARCH_QUERY } from './actionTypes';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filter: 'SHOW_ALL',
  searchQuery: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };

    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return { ...state, tasks: toggledTasks };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};

export default reducer;