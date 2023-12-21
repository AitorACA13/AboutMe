import { Link } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav className='headerContainer'>
      <ul className='menu'>
        <li>
          <Link to='/'> Inicio</Link>
        </li>
        <li>
          <Link to='/experience'>Experiencia</Link>
        </li>
        <li>
          <Link to='/info'> Información</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
