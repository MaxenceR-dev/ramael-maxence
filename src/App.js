import ParticlesContainer from "./Particules";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
   <>
 <ParticlesContainer />
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
      <ParticlesContainer />

   </>
  );
}

export default App;
