import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';  // Import Navbar
import AboutUsPage from './AboutUsPage.js';
import HomePage from './HomePage.js';
import UnboundStoriesPage from './UnboundStoriesPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import SignUpPageEmployer from './SignUpPage';

function App() {
  return (
    <Router>
      <div className="Container">
        <Nav />  {/* Navbar to navigate through pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/stories" element={<UnboundStoriesPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
