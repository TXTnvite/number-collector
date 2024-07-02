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
            <li><a href='/about'>About</a></li>
            <l1><a>Solutuions</a></l1>
            <li><a>News</a></li>
            <li><a href='/questions'>Questions</a></li>
        </ul>
        <Link to='/auth'><button>Login/Signup</button></Link>
    </header>
  );
}
export default Navbar;
