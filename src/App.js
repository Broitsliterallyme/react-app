import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';  // Import Navbar
import Footer from './Footer.js';
import AboutUsPage from './AboutUsPage.js';
import HomePage from './HomePage.js';
import UnboundStoriesPage from './UnboundStoriesPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import SignUpPageEmployer from './SignUp_Employer';
import SignUpPageEmployee from './SignUp_Employee';
import LoginEmployee from './Login_Employee.js';
import LoginEmployer from './Login_Employer.js';
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
          <Route path="/signup/Employer" element={<SignUpPageEmployer />} />
          <Route path="/signup/Employee" element={<SignUpPageEmployee />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/Employer" element={<LoginEmployer />} />
          <Route path="/login/Employee" element={<LoginEmployee />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
