import React from 'react'
import {
    AppstoreOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    OrderedListOutlined,
    ProfileOutlined
  } from "@ant-design/icons";
import './SideBar.scss'
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-top">
          {/* <img src={logo}></img> */}
          <h4>Admin</h4>
        </div>
        <div className="sidebar-list">
          <Link to="/" className={'sidebar-list-item'}>
            <span>
              <AppstoreOutlined></AppstoreOutlined>
            </span>
            <p>Dashboard</p>
          </Link>
          <Link to="/customer" className={'sidebar-list-item'}>
            <span>
              <UsergroupAddOutlined></UsergroupAddOutlined>
            </span>
            <p>Customer</p>
          </Link>
          <Link to="/employee" className={'sidebar-list-item'}>
            <span>
              <ShopOutlined></ShopOutlined>
            </span>
            <p>Employee</p>
          </Link>
          <Link to="/order" className={'sidebar-list-item'}>
            <span>
              <OrderedListOutlined></OrderedListOutlined>
            </span>
            <p>
             Order
              {/* <div className="admin-order-new">
                  10
                </div> */}
            </p>
          </Link>


          

        </div>
      </div>
  )
}

export default SideBar