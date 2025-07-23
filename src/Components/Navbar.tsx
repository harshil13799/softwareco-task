import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 p-4 text-white flex gap-4">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/estimations">Estimations</Link>
  </nav>
);

export default Navbar;