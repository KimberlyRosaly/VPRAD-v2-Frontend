// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Routes, Route, Outlet } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-




export default function App() {
  
  return (<>


    {/*  ==================================================================== */}
    {/*                                             CLIENT SIDE R O U T I N G */}
    <Routes>      
        {/* ====================================================== ROOT PATH  */}
        <Route path="/" element={} />
        {/* =============================================site.com/access-portal/  */}
        <Route path="/access-portal" element={} >
          {/* ===========================================site.com/access-portal/login/  */}
          <Route path="/login" element={} />
          {/* ===========================================site.com/access-portal/signup/  */}
          <Route path="/signup" element={} />
        </Route>
    </Routes>   
    {/*  ==================================================================== */}    
    

  </>);
}
