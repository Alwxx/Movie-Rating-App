import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    </div>
  );
};
