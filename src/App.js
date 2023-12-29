import React from "react";

import AppRouter from "./components/AppRouter";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import BartenderHomePage from "./pages/BartenderMenuPage";
import BartenderOrderPage from "./pages/BartenderOrderPage"
function App() {

    return (
      <div className='app_wrapper' >
          <HashRouter>
            <Routes>    
                <Route path="/" element={<BartenderHomePage />} />
                <Route path="/orders" element={<BartenderOrderPage />} />
            </Routes>
        </HashRouter>
      </div>
  );
}

export default App;



