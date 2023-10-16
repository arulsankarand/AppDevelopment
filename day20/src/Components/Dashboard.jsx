import React from 'react';
import Sidebar from './Side2';
import Footer from './Footer';
import Header from './Header';

import "../Assets/Dashboard.css"
import { selectUser } from '../Redux/userSlice';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'DS ';
  // const username = localStorage.getItem('user');
  return (
    <>
    <Header/>
    <Sidebar />
    <div className="dashboard">
      <div className="content">
      <h1>DashBoard of {username}</h1>
      
      <div className="grid-container">
      <div className="grid-list">
            <h2>NUMBER OF SERVICES</h2>
            <div className="count">327</div>
        </div>
      <div className="grid-list">
            <h2>EARNING</h2>
            <div className="count">700000</div>
        </div>
      <div className="grid-list">
            <h2>CUSTOMERS</h2>
            <div className="count">300</div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    );
}

export default Dashboard;


