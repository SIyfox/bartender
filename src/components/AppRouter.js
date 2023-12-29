import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import { publicRoutes } from '../routes';
import {MENUPAGE_ROUTE,ORDERPAGE_ROUTE} from '../utils/consts';
import BartenderHomePage from '../pages/BartenderMenuPage';
import BartenderOrderPage from '../pages/BartenderOrderPage';

const AppRouter = () => {


    return (

        <Routes>
              <Route path="/menu" element={<BartenderHomePage />} />
               <Route path="/orders" element={<BartenderOrderPage />} />
    
      </Routes>
       // <Routes>


         //   {publicRoutes.map(({path,Component})=> 
          //      <Route key={path} path={path} element={<Component/>} exact/>
          //  )}
        //    <Route path="*" element={<Navigate replace to={MENUPAGE_ROUTE} />} />
       // </Routes>
    )
}

export default AppRouter;