import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieCard from "./components/moviecard/Moviecard";
import "../src/App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./Router.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
