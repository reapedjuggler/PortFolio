import './App.css';
import MyNavbar from './components/my-navbar/Navbar'
import Carousel from './components/carousal/Carousal'
import Title from './components/title/Title'
import About from './components/Nav-items/About/About'

const App = () => {
  return (
    <div className="App">
       <MyNavbar />
       <Title />
       <Carousel />
       <About />
    </div>

  );
}

export default App;