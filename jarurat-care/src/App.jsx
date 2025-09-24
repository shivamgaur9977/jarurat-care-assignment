import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Patients from './Components/Patients';
import AddPatient from './Components/AddNewPatient';
import Home from './Components/Home';
import NotFound from './Components/PageNotFound';

function App() {
  let [allPatients, setAllPatients] = useState();
  let [isFetched, setIsFetched] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Patients allPatients={allPatients} setAllPatients={setAllPatients} isFetched={isFetched} setIsFetched={setIsFetched} />} path="/patients" />
          <Route element={<AddPatient setAllPatients={setAllPatients} />} path='/addPatient' />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
