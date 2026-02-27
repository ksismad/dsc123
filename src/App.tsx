import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Login from './pages/Login';
import About from './pages/About';
import DSCFinder from './components/DSCFinder';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <DSCFinder />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Header />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;