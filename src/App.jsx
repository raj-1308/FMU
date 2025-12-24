import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services/>
              <Contact />
            </>
          }
        />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<Home />} />

      </Routes>

      <Footer />
   


    </>
  );
}

export default App;