import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="container">
            <h1>Welcome, {user?.name}</h1>
            <button onClick={logout}>Logout</button>
            {/* TaskList and TaskForm components will go here */}
        </div>
    );
};

export default Dashboard;