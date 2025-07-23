import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Items from './pages/Items';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='flex-col'>
        <div className='flex flex-col lg:flex-row'>
          <Navbar />
          <div className='flex-col p-4 overflow-auto min-h-screen w-full'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/items' element={<Items />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
