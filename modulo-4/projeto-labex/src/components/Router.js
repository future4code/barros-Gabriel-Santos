import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import ErrorPage from './signUp.js/signUp';


function Router() {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element= {<Home/>}/>
              <Route path="404" element= {<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;