import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Your App</h1>
            <p>
                Get started by logging in or registering a new account.
            </p>
            <div style={{ marginTop: "1rem" }}>
                <Link to="/login">
                    <button style={{ marginRight: "1rem" }}>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>

            {/* About Section */}
            <section style={{ marginTop: "3rem", textAlign: "left" }}>
                <h2>About This App</h2>
                <p>
                    {/** Task Manager version **/}
                    For the Task Manager: Manage your tasks efficiently. 
                    Create, update, and track tasks with statuses and categories, 
                    with full user authentication and data persistence in MongoDB.
                </p>
            </section>
        </div>
    );
};

export default Home;
