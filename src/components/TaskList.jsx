import { useEffect, useState } from "react";
import {
    getTasks,
    updateTaskStatus,
    deleteTask,
} from "../services/taskService";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const fetchTasks = async () => {
        const { data } = await getTasks({
            status: statusFilter,
            category: categoryFilter,
        });
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, [statusFilter, categoryFilter]);

    const handleStatusChange = async (id, status) => {
        await updateTaskStatus(id, status);
        fetchTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div>
            <h3>Your Tasks</h3>

            {/* Filters */}
            <div>
                <select onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                </select>

                <input 
                    type="text"
                    placeholder="Filter by category"
                    onChange={(e) => setCategoryFilter(e.target.value)}
                />
            </div>

            {/* Task List */}
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <strong>{task.title}</strong> ({task.category})
                        <br />
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                        <br />
                        Status:
                        <select
                            value={task.status}
                            onChange={(e) => handleStatusChange(task._id, e.target.value)}
                        >
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Overdue">Overdue</option>
                        </select>

                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;