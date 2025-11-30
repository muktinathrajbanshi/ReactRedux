import { useSelector } from "react-redux";

export const Todo = () => {

    const tasks = useSelector((state) => state.task);
    // console.log("react states", state.task);
    

    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i>To-do List:
                </h1>
                <div className="row">
                    <form>
                        <input type="text" id="input-box" placeholder="Add a new task" />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        tasks.map((curTask, index) => {
                            return (
                                <li key={index}>
                                    <p>{index}: {curTask}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};