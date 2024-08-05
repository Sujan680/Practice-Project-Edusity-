import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
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
    </div>
  )
}

export default App