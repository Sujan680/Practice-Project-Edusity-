import './navbar.css';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contat Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar