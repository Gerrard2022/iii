import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar, Hero, Contact, About, StarsCanvas, Course, Footer} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero /> 
        </div>
        <div className="relative z-0">
        <About />
        <Course />
        <Footer />
        <StarsCanvas />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

