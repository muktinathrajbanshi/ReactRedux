import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";


const initialState = {
    task: [],
    isLoading: false,
};

// Step 5: Create action creators
export const addTask = (data) => {
   return { type: ADD_TASK, payload: data }
}; 

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ... state,
                task: [... state.task, action.payload],
            };

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => index !== action.payload); 
               return {
                ...state,
                task: updatedTask,
               };
        default:
            return state;
    }
};

// Step 2: Create the Redux store using the reducer 
export const store = createStore(taskReducer, composeWithDevTools);

// Step 3: Log the initial state 
console.log("initial State: ", store.getState());

// Step 4: Dispatch an action to add a task 
store.dispatch(addTask("Good Morning!"));
store.dispatch(addTask("Good Afternoon!"));
store.dispatch(addTask("Good Night"));
console.log("updated State: ", store.getState());






