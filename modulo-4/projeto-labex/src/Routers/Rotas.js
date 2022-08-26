import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationForm from '../Pages/ApplicationFormPage';
import Home from '../Pages/HomePage';
import AdminHomePage from '../Pages/AdminHomePage'




function Router() {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path="application-form" element={<ApplicationForm/>}/>
              <Route path="admin-home-page" element={<AdminHomePage/>}/>
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;