import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import Services from "./containers/Services"
import LetsTalk from "./containers/LetsTalk";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <LetsTalk />
      <Footer />
    </div>
  );
}

export default App;
