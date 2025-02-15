import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://app-notas-backend-1.onrender.com",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (username, password) => {
  const response = await apiClient.post("/api/token/", { username, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post("/api/users/register/", userData);
  return response.data;
};

export const fetchTasks = async () => {
  const response = await apiClient.get("/api/tasks/");
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await apiClient.post("/api/tasks/", taskData);
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await apiClient.put(`/api/tasks/${id}/`, taskData);
  return response.data;
};

export const deleteTask = async (id) => {
  await apiClient.delete(`/api/tasks/${id}/`);
};
