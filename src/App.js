import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components 
import Header from './components/Header'
import Footer from './components/Footer'

// Pages 
import Summary from './pages/Summary'
import Stats from './pages/Stats'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="stats/:id" element={<Stats />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
