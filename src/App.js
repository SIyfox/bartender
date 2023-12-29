import React, {useContext, useEffect, useState} from 'react';
import { Context } from './index';
import image_dec_0 from'./assets/images/menu_decoration_0.png';
import BartenderMenuItem from './components/BartenderMenuItem'
import { reaction } from 'mobx';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
function App() {

    return (
      <div className='app_wrapper' >
          <BrowserRouter>
                  <AppRouter/>
          </BrowserRouter>
      </div>
    
  );
}

export default App;



