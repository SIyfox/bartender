import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import { HashRouter } from 'react-router-dom';
function App() {

    return (
      <div className='app_wrapper' >
          <HashRouter>
                  <AppRouter/>
          </HashRouter>
      </div>
  );
}

export default App;



