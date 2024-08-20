const express = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const { userAuth, admin } = require('../middlewares/authMiddleware');

const movieRouter = express.Router();

movieRouter.get('/', getMovies);
movieRouter.post('/', userAuth, admin, createMovie);
movieRouter.put('/:id', userAuth, admin, updateMovie);
movieRouter.delete('/:id', userAuth, admin, deleteMovie);

module.exports = { movieRouter };
