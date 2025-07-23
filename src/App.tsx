import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Features/auth/Login';
import Register from './Features/auth/Register';
import ForgotPassword from './Features/auth/ForgotPassword';
import Dashboard from './Features/Dashboard/Dashboard';
import ProjectList from './Features/Projects/ProjectList';
import ProjectForm from './Features/Projects/ProjectForm';
import EstimationList from './Features/Estimation/EstimationList';
import EstimationForm from './Features/Estimation/EstimationForm';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route
        path="/projects"
        element={<ProtectedRoute><ProjectList /></ProtectedRoute>}
      />
      <Route
        path="/projects/new"
        element={<ProtectedRoute><ProjectForm /></ProtectedRoute>}
      />
      <Route
        path="/estimations"
        element={<ProtectedRoute><EstimationList /></ProtectedRoute>}
      />
      <Route
        path="/estimations/new"
        element={<ProtectedRoute><EstimationForm /></ProtectedRoute>}
      />
    </Routes>
  </Router>
);

export default App;