import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";

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



