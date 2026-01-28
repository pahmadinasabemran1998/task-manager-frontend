import { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Work");
    const [status, setStatus] = useState("In Progress");
    const [deadline, setDeadline] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createTask({
                title,
                category,
                status,
                deadline,
            });

            setTitle("");
            setCategory("Work");
            setStatus("In Progress");
            setDeadline("");
            onTaskAdded();
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>

            <input 
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
                <option value="Other">Other</option>
            </select>

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <input 
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Task"}
            </button>
        </form>
    );
};

export default TaskForm;