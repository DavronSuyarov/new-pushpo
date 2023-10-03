import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import Blogdefault from './Pages/Blogdefault';
import Bloggrid from './Pages/Bloggrid';
import Footer from './components/Footer';
import Blogfull from './Pages/Blogfull';
import Singlepost from './Pages/Singlepost';
import Notfound from './Pages/Notfound';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Contact /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogdefault' element={<Blogdefault />} />
        <Route path='/bloggrid' element={<Bloggrid />} />
        <Route path='/blogfull' element={<Blogfull />} />
        <Route path='/singlepost' element={<Singlepost />} />
        <Route path='/notfound' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
