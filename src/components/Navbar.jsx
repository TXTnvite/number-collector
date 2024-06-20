import { useEffect } from 'react';
import "../assets/CSS/components/navbar.css";

const Navbar = () =>{

  return (
    <header className='navbar-container d-f-even'>
        <section>
            <h1>TXT'nvite</h1>
        </section>
        <ul className='d-f-even'>
            <li>About</li>
            <l1>Solutions</l1>
            <li>News</li>
            <li>Questions</li>
        </ul>
        <button>Login/Signup</button>
    </header>
  );
}
export default Navbar;
