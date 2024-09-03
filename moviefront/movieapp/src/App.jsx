import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieCard from './components/moviecard/Moviecard';
import '../src/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Movie Gallery</h1>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;