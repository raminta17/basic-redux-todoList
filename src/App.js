import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {addTask, removeTask} from "./features/tasks";
import {useRef} from "react";


function App() {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const taskRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTask(taskRef.current.value));
        taskRef.current.value='';
    }
    function handleDeleteTask(index){
        dispatch(removeTask(index));
    }

  return (
    <div className="todoList">
            <div className="todoHeader">You have {tasks.tasks.length} Todos</div>
            {tasks.tasks.map((task, index) =>
                <div className="taskDiv" key={index}>
                    <p>{task}</p>
                    <div onClick={() => handleDeleteTask(index)} className="removeTask">x</div>
                </div>
                ) }

        <form onSubmit={handleSubmit}>
            <input ref={taskRef} type="text" placeholder="add task"/>
            <button>ADD TASK</button>
        </form>

    </div>
  );
}

export default App;
