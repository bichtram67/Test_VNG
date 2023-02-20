import React from 'react'
import { Redirect, Route, Routes ,Link, Navigate} from "react-router-dom";
import AdminCustomer from '../components/Admin/AdminCustomer/AdminCustomer';
import AdminEmployee from '../components/Admin/AdminEmployee/AdminEmployee';
import AdminOrder from '../components/Admin/AdminOrder/AdminOrder';
import Dashboard from '../components/Admin/Dashboard/Dashboard';
import Admin from '../pages/Admin';

const Router = () => {
  return (
   <Routes>
        <Route path="/" element={<Admin />}>

            <Route index element={<Dashboard />} />
            <Route path="customer" element={<AdminCustomer />} />
            <Route path="employee" element={<AdminEmployee />} />
            <Route path="order" element={<AdminOrder />} />




        </Route>
   </Routes>
  )
}

export default Router