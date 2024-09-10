import axios from 'axios';

const API_URL = 'http://localhost:3000/api/movies'; 

const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};

export default fetchMovieById;
