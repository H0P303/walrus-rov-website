import React from 'react';
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";
import Footer from "./components/footer/Footer";

//Styles
import "./styles/style.css";

//Sources
import sample from "./sources/Walrus-BG-Vid.mp4"

class App extends React.Component{
  render() {
    return (
      <div className='App'>
        <video autoPlay muted loop className='BG-Vid'>
          <source src={sample} type='video/mp4' />
        </video>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);