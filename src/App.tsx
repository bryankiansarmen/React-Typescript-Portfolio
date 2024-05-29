import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Footer />
    </>
  );
};

export default App;
