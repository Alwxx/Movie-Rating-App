import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/Pages/Home';
import MoviePage from '../src/Pages/MoviePage';
import LoginPage from '../src/Pages/Login';
import SignUpPage from '../src/Pages/SignUp';
import ProfilePage from '../src/Pages/Profile';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App
