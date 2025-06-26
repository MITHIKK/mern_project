import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./styles.css";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

const App = () => (
  <AuthProvider>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<PrivateRoute><JobList /></PrivateRoute>} />
        <Route path="/jobs/:id" element={<PrivateRoute><JobDetails /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/jobs" />} />
      </Routes>
    </div>
  </AuthProvider>
);

export default App; 