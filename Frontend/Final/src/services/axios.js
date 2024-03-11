import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user-dashboards';

export const getUserDashboardById = (id) => {
 return axios.get(`${API_URL}/${id}`);
};

export const createUserDashboard = (userDashboardDto) => {
 return axios.post(API_URL, userDashboardDto);
};

export const updateUserDashboard = (id, userDashboardDto) => {
 return axios.put(`${API_URL}/${id}`, userDashboardDto);
};

export const deleteUserDashboard = (id) => {
 return axios.delete(`${API_URL}/${id}`);
};

export const getAllUserDashboards = () => {
 return axios.get(API_URL);
};