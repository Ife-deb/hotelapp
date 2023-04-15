import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleEmployee = () => {
    navigate("/home", { state: { mode: "employee"} });
  };
  const handleCustomer = () => {
    navigate("/home", { state: { mode: "customer"} });
  };

  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="loginBox">
          <button onClick={handleEmployee} className="loginBtn">
            Employee Login
          </button>
          <button onClick={handleCustomer} className="loginBtn">
            Customer Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
