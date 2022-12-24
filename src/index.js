import React from 'react';
import ReactDOM from "react-dom/client"

//Statics
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

//Content
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import TimeLinePage from './Pages/TimeLinePage/TimeLinePage';
import CodePage from './Pages/CodePage/CodePage'
import TeamPage from './Pages/TeamPage/TeamPage'

//Styles
import "./Styles/style.css";

//Sources
import sample from "./sources/Walrus-BG-Vid.mp4"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component{
  render() {
    return (
      <div className='App'>
        <video autoPlay muted loop className='BG-Vid'>
          <source src={sample} type='video/mp4' />
        </video>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/About' element={<AboutPage />}></Route>
            <Route path='/TimeLine' element={<TimeLinePage />}></Route>
            <Route path='/Code' element={<CodePage />}></Route>
            <Route path='/Team' element={<TeamPage />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);