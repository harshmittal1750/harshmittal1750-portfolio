import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import Banner from "./sections/Banner/Banner";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
     
      <Banner className="App-banner"></Banner>{" "}
      <Navbar className="App-navbar"></Navbar>
      <Footer className="App-footer"></Footer>
    </div>
  );
}

export default App;
