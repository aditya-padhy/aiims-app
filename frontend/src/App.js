import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HospitalForm from './pages/hospital_service';
import BackgroundInfoForm from './pages/background';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Emergency Questionnaire AIIMS</h1>
      <p className="text-lg mb-8">Use the sections below to access different parts of the questionnaire.</p>
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Sections</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/background-info" className="text-blue-600 hover:underline font-bold">Section A: Background Information of Hospital</Link>
          </li>
          <li>
            <Link to="/hospital-service" className="text-blue-600 hover:underline font-bold">Section B: Hospital Services</Link>
          </li>
          <li>
            <span className="font-bold">Section C:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
          <li>
            <span className="font-bold">Section D:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
          <li>
            <span className="font-bold">Section E:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
          <li>
            <span className="font-bold">Section F:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
          <li>
            <span className="font-bold">Section G:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
          <li>
            <span className="font-bold">Section H:</span> <span className="text-gray-500">(Coming soon)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background-info" element={<BackgroundInfoForm />} />
        <Route path="/hospital-service" element={<HospitalForm />} />
      </Routes>
    </Router>
  );
}

export default App;
