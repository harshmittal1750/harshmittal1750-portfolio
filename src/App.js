import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from "./sections/Banner/Banner";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar className="App-navbar"></Navbar>
      <Banner className="App-banner"></Banner>
      <About className="App-about"></About>
      <Footer className="App-footer"></Footer>
    </div>
  );
}

export default App;
