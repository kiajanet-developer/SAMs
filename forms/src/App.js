import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


import StdsignUp from './components/StdsignUp';
import LectSignUp from './components/LectSignUp';
import Login from "./components/Login"
import StudentsHome from "./components/Homepage/StudentsHome"
import LecturerHome from './components/Homepage/LecturerHome';
import StudentsProgress from './components/StudentsProgress'
import Admin from './components/Homepage/Admin';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/StudentsHome" element={<StudentsHome />} /> 
        <Route path="/LecturerHome" element={<LecturerHome />} /> 
        <Route path="/" element={<Login />} />
        <Route path="/StdRegister" element={<StdsignUp />} />
        <Route path="/LectRegister" element={<LectSignUp />} />
        <Route path="/StudentsProgress" element={<StudentsProgress />} />
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
