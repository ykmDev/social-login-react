import { Link } from 'react-router-dom';
  
  const Navbar = ({user}) =>  {
    const Logout = () => {
      window.open("http://localhost:5000/auth/logout", "_self");
    };

	return (
	  <div className='navbar'>
        <span className="logo">
            <Link to="/" className='link'>Social Login APP</Link>
        </span>
        {user ? (
            <ul className="list">
            <li className="listItem">
              <img
                src={user.photos[0].value}
                alt={user.displayName}
                className="avatar"
              />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={Logout}>
              Logout
            </li>
          </ul>
        ) : (
            <Link to="/login" className='login'>Login</Link>
        )}
	  </div>
	);
  }
  
  export default Navbar;
  