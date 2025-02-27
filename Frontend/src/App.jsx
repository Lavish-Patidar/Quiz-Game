import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and routing components
import './App.css'; // Link the custom styles
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
