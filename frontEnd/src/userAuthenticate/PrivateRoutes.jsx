
import {useLocation, Navigate } from 'react-router-dom';

import Dashboard from '../Page/Dashboard/Dashboard';
import AuthContext from '../context/AuthProvider';
import { useContext } from 'react';


function PrivateRoutes() {

  const { auth } = useContext(AuthContext);
  const { location } = useLocation();


  return (
    auth?.success ?
    <>
    <Dashboard/>
    </> 
     : 
    
    
    <Navigate to='/login' state={{ from : location}} replace/>

  )
}

export default PrivateRoutes
