import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
import ImgSlider from "./components/ImgSlider";
import Services from "./components/Services";
import Whatsapp from "./components/Whatsapp";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ImgSlider/>
      <Services/>
      <GoogleMap/>
      <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
