import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

export const getTasks = async () => {
  const res = await axios.get(`${BASE_URL}/tasks`);
  return res.data;
};

export const addTask = async (task) => {
  const res = await axios.post(`${BASE_URL}/tasks`, task);
  return res.data;
};

export const updateTask = async (id, updatedTask) => {
  const res = await axios.put(`${BASE_URL}/tasks/${id}`, updatedTask);
  return res.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${BASE_URL}/tasks/${id}`);
};
