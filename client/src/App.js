import React from 'react'
// import './App.css';
import Register from './Register'
import Home from './Home'
import {  Route,Routes } from "react-router-dom";



export default function App() {
  return (
    <>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path='/signup' element={<Register/>}/>
      </Routes>
    </>
  )
}
