import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
