import api from "./api";

export const getTasks = (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    return api.get(`/tasks?${query}`);
};

export const createTask = (taskData) => {
    return api.post("/tasks", taskData);
};

export const updateTaskStatus = (id, status) => {
    return api.put(`/tasks/${id}`, { status });
};

export const deleteTask = (id) => {
    return api.delete(`/tasks/${id}`);
};