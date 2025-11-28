import { createStore } from "redux";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";


const initialState = {
    task: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ... state,
                task: [... state.task, action.payload],
            };

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            });
            return {
                ... state,
                task: updatedTask,
            };    
            
        default:
            return state;
    }
};

// Step 2: Create the Redux store using the reducer 
const store = createStore(taskReducer);
console.log(store);


// Step 3: Log the initial state 
// The getState method is a synchronous function that returns the current
// state of a Redux application. It includes the entire state of the application, 
// including all the reducers and their respective CustomStateSet.

