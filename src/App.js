
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import MyWork from "./component/MyWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
