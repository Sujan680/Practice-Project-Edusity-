import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
import Testimonials from "./components/testimonials/Testimonials "
import Title from "./components/title/Title"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs/>
      </div>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title subTitle='Testimonials' title='What Students Says...' />
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get In Touch' />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App