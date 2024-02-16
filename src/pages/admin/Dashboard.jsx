import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  const stylelink={
    color:'black'
  }
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          width: "100%",
          background: "blue",
          color: "black",
          padding: "10px",
        }}
      >
        <p style={{ textAlign: "center" }}>Admin</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            height: "100vh",
            background: "black",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/create">
            Create
          </Link>
        </div>
        <div
          style={{
            width: "200px",
            height: "100vh",
            width: "100%",
            background: "white",
            padding: "20px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
