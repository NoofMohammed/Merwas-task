import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import SmallNav from "./components/small_nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <Slider />
        <Home />
        <Footer />
        <SmallNav />
      </div>
    </>
  );
}

export default App;
