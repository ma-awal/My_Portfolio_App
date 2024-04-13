import './Register.css';

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-4">
            <div className="admin_form py-5 px-3 bg-dark">
              <form className=" ">
                <h3 className="text-center ">Register</h3>
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    className="  form-control"
                    type="text"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    className="  form-control"
                    type="text"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    className="  form-control"
                    type="password"
                    placeholder="Enter your password..."
                  />
                </div>
                <button className=" py-2  register_btn rounded-0 btn    ">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
