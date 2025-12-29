import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import CF1 from "./Components/Services/CF1/CF1";
import CF2 from "./Components/Services/CF2/CF2";
import CF3 from "./Components/Services/CF3/CF3";
import CF4 from "./Components/Services/CF4/CF4";
import CF5 from "./Components/Services/CF5/CF5";
import CF6 from "./Components/Services/CF6/CF6";

function App() {
  return (
    <>
      <Routes>
        {/* HOME PAGE (single-page sections) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />

      
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />

    
        <Route path="/Services/CF1" element={<CF1 />} />
        <Route path="/Services/CF2" element={<CF2 />} />
        <Route path="/Services/CF3" element={<CF3 />} />
        <Route path="/Services/CF4" element={<CF4 />} />
        <Route path="/Services/CF5" element={<CF5 />} />
        <Route path="/Services/CF6" element={<CF6 />} />

        
        <Route
          path="*"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
