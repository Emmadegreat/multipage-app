import './components/static/index.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/pages/about'
import Contact from './components/pages/contact'
import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Home from './components/pages/home';
import { useState } from 'react';

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="App">

          <div className='spacer'></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

          <Footer
            date={new Date().getFullYear()}
            copyright="&copy; All Right Reserved. PEPS' CAKE"
            contact="+234-703-453-4697"
          />

        </div>
      </Router>
    </>

  );
}

export default App;
