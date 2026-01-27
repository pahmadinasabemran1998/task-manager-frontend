import { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask({
            title,
            category,
            deadline,
            status: "In Progress",
        });

        setTitle("");
        setCategory("");
        setDeadline("");
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>

            <input 
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input 
                type="text"
                placeholder="Category (Work, Personal, etc.)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />

            <label>Deadline: </label>    
            <input 
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;