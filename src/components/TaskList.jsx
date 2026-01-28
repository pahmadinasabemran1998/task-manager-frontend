import { useEffect, useState } from "react";
import {
    getTasks,
    updateTaskStatus,
    deleteTask,
} from "../services/taskService";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const { data } = await getTasks({
                status: statusFilter,
                category: categoryFilter,
            });
            setTasks(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
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

    if (loading) {
        return <p className="loading">Loading tasks...</p>;
    }

    return (
        <div className="task-list">
            <h3>Your Tasks</h3>

            {/* Filters */}
            <div className="filters">
                <select onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                </select>

                <select onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Empty State */}
            {tasks.length === 0 ? (
                <p className="empty-state">
                    No tasks found. Add a new task to get started 🚀
                </p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task._id} className="task-card">
                            <div className="task-header">
                                <strong>{task.title}</strong>
                                <span className={`status ${task.status.replace(" ", "-")}`}>
                                    {task.status}
                                </span>
                            </div>

                            <p>Category: {task.category}</p>
                            <p>
                                Deadline:{" "}
                                {new Date(task.deadline).toLocaleDateString()}
                            </p>

                            <select
                                value={task.status}
                                onChange={(e) => handleStatusChange(task._id, e.target.value)}
                            >
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Overdue">Overdue</option>
                            </select>

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(task._id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;