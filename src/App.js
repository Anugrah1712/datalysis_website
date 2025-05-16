import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Chatbot } from 'rag-chatbot-ui-datalysis';
import Search from './pages/Search';



const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <Chatbot />
    <Footer />
  </Router>
);

export default App;
