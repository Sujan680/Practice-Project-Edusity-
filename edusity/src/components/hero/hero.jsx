import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting edge curriculu is designed to empower students with knowlede, skills and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero