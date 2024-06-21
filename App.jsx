import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home'; // Adjust path as per your project structure
import Programs from './Programs'; // Adjust path as per your project structure
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
