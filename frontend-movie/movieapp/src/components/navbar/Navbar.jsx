import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
const Navbar = () => {

  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <nav>
          <button onClick={toggleTheme}></button>
          Switch to {theme === 'light'? 'Dark' : 'Light'} Mode
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/profile">Profile</Link>
            </ul>
        </nav>
    </div>
  )
  };


export {Navbar};