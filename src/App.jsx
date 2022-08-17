import './App.css';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';
import Consultation from './components/Consultation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/add-patient' element={<AddPatient />} />
            <Route path='/patient-list' element={<PatientList />} />
            <Route path='/consultation-list' element={<Consultation />} />
          </Routes>
        </main>
        <footer>
          <strong>&copy;Patient Gestion&nbsp;</strong>by&nbsp;<a href="www.google.com">Slip Teams&nbsp;</a>2022.
        </footer>
      </BrowserRouter>
    </div >
  )
}

export default App