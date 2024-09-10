import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import MovieCard from "./components/moviecard/Moviecard";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieCard />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
