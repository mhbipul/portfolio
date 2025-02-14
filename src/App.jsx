import "./App.css";
import About from "./components/About-Me/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Services/Service";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </>
  );
}

export default App;
