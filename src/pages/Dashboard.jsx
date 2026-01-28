import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    const reloadTasks = () => setRefresh(!refresh);

    return (
        <div className="container">
            <h1>Welcome, {user?.name}</h1>
            <button onClick={logout}>Logout</button>

            <TaskForm onTaskAdded={reloadTasks} />
            <TaskList key={refresh} />
        </div>
    );
};

export default Dashboard;