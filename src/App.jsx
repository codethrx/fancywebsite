//components and pages import
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./components/MovieDetail";
//import Global Styles
import GlobalStyles from "./components/GlobalStyles";
//react router dom
import { Routes, Route, useLocation } from "react-router-dom";
//framer motion
import { AnimatePresence } from "framer-motion";
//testing
import Testing from "./components/Testing";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<AboutUs />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work/:movieName" element={<MovieDetail />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </div>
      {/* <Testing /> */}
    </>
  );
}

export default App;
