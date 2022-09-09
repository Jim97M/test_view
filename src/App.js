import React from 'react';
import reactDom from 'react-dom';
import { 
    BrowserRouter,
    Route,
    Routes
  } from 'react-router-dom';
  import {FiSettings} from 'react-icons/fi'
  import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import Signup from './auth/signup/Signup';
  const App = () => {
      return(
          <BrowserRouter>
             <Routes>
                 <Route index element={<Signup />} />

                 <Route path='/' element={<Signup />} />
             </Routes>
          </BrowserRouter>
      );
  };

  export default App;