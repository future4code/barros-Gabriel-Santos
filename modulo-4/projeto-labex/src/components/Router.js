
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import home from './home';

function Router() {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element= {<home/>}/>
              
  
              
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;