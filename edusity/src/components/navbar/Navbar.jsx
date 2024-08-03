import './navbar.css';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contat Us</li>
        </ul>
    </nav>
  )
}

export default Navbar