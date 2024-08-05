import './about.css';

import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const About = () => {
  return (
    <div className='about container' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
          <h3>About University</h3>
          <h2>Nurturing Tommorws leaders Today</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam minus quaerat id. Doloremque, totam exercitationem quas tempora eaque illum neque incidunt necessitatibus reprehenderit ut, commodi nemo velit, eum eligendi? Cupiditate sapiente saepe impedit praesentium, assumenda explicabo asperiores iste,</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci consequuntur molestias eligendi, ratione facere ullam, aperiam unde veniam tenetur recusandae libero quam reiciendis dolore tempore debitis omnis inventore. Illo non, dignissimos tempora magni asperiores quae?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cupiditate explicabo sequi suscipit sed, et hic vero commodi accusamus accusantium deserunt aperiam necessitatibus, a ea asperiores aut debitis incidunt sunt.</p>
        </div>

    </div>
  )
}

export default About