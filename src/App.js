import './App.css';
import Feature from './components/Feature/Feature';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Videopop from './components/Videopop/Videopop';
import Screenshot from './components/Screenshot/Screenshot';
import Download from './components/Download/Download';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Videopop/>
      <Feature/>
      <Screenshot/>
      <Download/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
