import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className="hover:text-gray-300">
                Cadastro
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;