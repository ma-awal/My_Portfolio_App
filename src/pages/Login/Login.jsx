import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="admin_form">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-4">
            <form className="loginForm  bg-dark py-5 px-3">
              <h3 className="loginTitle text-center">Login</h3>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  className=" form-control"
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter your password..."
                />
              </div>
              <button
                className=" btn  btn-sm  login_btn   mb-3 py-2 rounded-0"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
