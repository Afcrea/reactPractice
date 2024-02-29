// App.jsx
import { React, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import About from './component/About';
import Navbar from './component/NavbarComponent/Navbar';
import LoginForm from './component/LoginForm';
import Stopwatch from './Stopwatch';
import Stopwatchtest from './Stopwatchtest';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/stopwatchtest" element={<Stopwatchtest />} />
          
        </Routes>
      </div>
    </Router>
    // <div>
    //   <LoginForm />
    // </div>
  );
};

export default App;
