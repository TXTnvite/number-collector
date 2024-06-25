import { useEffect } from 'react';
import "../assets/CSS/components/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () =>{

  return (
    <header className='navbar-container d-f-even'>
        <section>
            <Link to="/" className='highlight'>
              <h1>TXT'nvite</h1>
            </Link>
        </section>
        <ul className='d-f-even'>
            <li>About</li>
            <l1>Solutions</l1>
            <li>News</li>
            <li>Questions</li>
        </ul>
        <Link to='/auth'><button>Login/Signup</button></Link>
    </header>
  );
}
export default Navbar;
