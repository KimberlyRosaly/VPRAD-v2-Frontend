// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Home from './containers/Home';
import Portal from './containers/Portal';
import Login from './components/Login';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-




export default function App() {
  
  return (<>


    {/*  ==================================================================== */}
    {/*                                             CLIENT SIDE R O U T I N G */}
    <Routes>      
        {/* ====================================================== ROOT PATH  */}
        <Route path="/" element={<Home />} />
        {/* =============================================site.com/access-portal/  */}
        <Route path="/access-portal" element={<Portal />} >
          {/* ===========================================site.com/access-portal/login/  */}
          <Route path="/login" element={<Login />} />
          {/* ===========================================site.com/access-portal/signup/  */}
          <Route path="/signup" element={<Signup />} />
        </Route>
    </Routes>   
    {/*  ==================================================================== */}    
    

  </>);
}
