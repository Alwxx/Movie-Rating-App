import api from './api';

const API_URL = 'http://localhost:3001/api/movies'; 

const fetchMovieById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie ID:', error);
    throw error;
    
  };
};

export default fetchMovieById;