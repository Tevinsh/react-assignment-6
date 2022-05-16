import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBacklog } from "../store/actions/backlogActions";

const TaskForm = () =>{
    const [task,setTask] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        setTask(event.target.value);
    }
    const handleSubmit = () => {
        dispatch(addBacklog(task));
        setTask('');
    }
    return (
        <div className="pt-2">
            <input onChange={handleChange} value={task} className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="New Task" />
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-2">Save to Backlog</button>
        </div>
    )
}

export default TaskForm;