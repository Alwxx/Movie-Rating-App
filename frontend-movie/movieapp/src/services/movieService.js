import axios from 'axios';

const API_URL = 'http://localhost:3001/api/movies'; // Change to your deployed API URL

export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};

export const fetchAllMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all movies:', error);
    throw error;
  }
};
