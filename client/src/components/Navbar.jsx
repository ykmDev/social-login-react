import { Link } from 'react-router-dom';
  
  const Navbar = ({user}) =>  {
	return (
	  <div className='navbar'>
        <span className="logo">
            <Link to="/" className='link'>Lama APP</Link>
        </span>
        {user ? (
            <ul className="list">
            <li className="listItem">
              <img
                src="https://images.pexels.com/photos/26997915/pexels-photo-26997915/free-photo-of-a-girl-walking-down-a-dirt-road-with-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="avatar"
              />
            </li>
            <li className="listItem">MG MG</li>
            <li className="listItem">
              Logout
            </li>
          </ul>
        ) : (
            <Link to="/login">Login</Link>
        )}
	  </div>
	);
  }
  
  export default Navbar;
  