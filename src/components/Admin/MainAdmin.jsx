import React from 'react'
import AdminNavBar from './AdminNavBar/AdminNavBar'
import { Outlet } from "react-router-dom";
const MainAdmin = (props) => {
  return (
    <div className="admin">
        <AdminNavBar>
            <Outlet />
        </AdminNavBar>
    </div>
  )
}

export default MainAdmin