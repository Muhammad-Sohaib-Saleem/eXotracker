import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import SignupImg from "../Images/signupImg.svg";
const Signup = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(Username, email, password);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container shadow bg-white">
          <div className="row">
            <div className="col-lg-6 px-0">
              <form className="p-5" onSubmit={handleSubmit}>
                <div className="fs-2 fw-bold primary-text text-center mb-3">
                  Signup
                </div>
                {error && <div className="error">{error}</div>}
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="validationCustom01" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      onChange={(e) => setUsername(e.target.value)}
                      value={Username}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom01" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustom01"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom02" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="validationCustom02"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      disabled={isLoading}
                      className="w-100 btn primary-btn text-white btn-lg"
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 px-0 d-none d-lg-block">
              <img src={SignupImg} alt="login" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
    // <form className="signup" onSubmit={handleSubmit}>
    //   <h3>Sign Up</h3>

    //   <label>Email address:</label>
    //   <input
    //     type="email"
    //     onChange={(e) => setEmail(e.target.value)}
    //     value={email}
    //   />
    //   <label>Password:</label>
    //   <input
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   />

    //   <button disabled={isLoading}>Sign up</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
  );
};

export default Signup;
