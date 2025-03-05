import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';



axios.defaults.baseURL = import.meta.env.VITE_URI;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
