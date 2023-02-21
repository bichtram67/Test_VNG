import React, { useEffect } from "react";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  UsergroupDeleteOutlined,
  SkinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./DashBoard.scss";

export default function DashBoard() {

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content" >
              <li style={{background : '#990000'}}>
                <div className="dashboard-middle-statistic-icon">
                    <UserOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">200</span>
                  <span className="title" style={{fontSize: '20px'}}>Customer</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{background : '#2B7A0B'}}>
                <div className="dashboard-middle-statistic-icon">
                <DollarCircleOutlined/>

                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">15</span>
                  <span className="title">Order</span>
                </div>
              </li>
            </div>

        
            <div className="dashboard-middle-statistic-content">
              <li style={{background : '#D4AC2B'}}>
                <div className="dashboard-middle-statistic-icon">
                <UsergroupDeleteOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">10</span>
                  <span className="title">Employee</span>
                </div>
              </li>
            </div>
            
          </div>
        
        </div>

       
      </div>
    </section>
  );
}
