import api from './api';

const API_URL = 'http://localhost:3001/api/users';

const register = async (email, password) => {
  try {
    const response = await api.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};


const login = async (email, password) => {
  try {
    const response = await api.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};


const fetchUserProfile = async () => {
  try {
    const response = await api.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export default {
  register,
  login,
  logout,
  fetchUserProfile,
};
