import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "@feardread/crud-service";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("tabButton1");
  const { isLoggedIn, loginSuccess, registerSuccess } = useSelector((state) => state.auth);
 
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(auth.login(email, password));
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("register hit = ");
    const myForm = new FormData();
          myForm.set("name", name);
          myForm.set("email", email);
          myForm.set("mobile", mobile);
          myForm.set("password", password);

    dispatch(auth.register(myForm));
  }

  useEffect(() => {
    if ( isLoggedIn ) navigate("/account");
    if (loginSuccess && isLoggedIn) {
      navigate("/account");
    }
  }, [])

  return (
    <>
      <div className="loginSignUpSection">
        <div className="loginSignUpContainer">
          <div className="loginSignUpTabs">
            <p
              onClick={() => handleTab("tabButton1")}
              className={activeTab === "tabButton1" ? "active" : ""}
            >
              Login
            </p>
            <p
              onClick={() => handleTab("tabButton2")}
              className={activeTab === "tabButton2" ? "active" : ""}
            >
              Register
            </p>
          </div>
          <div className="loginSignUpTabsContent">
            {/* tab1 */}

            {activeTab === "tabButton1" && (
              <div className="loginSignUpTabsContentLogin">
                <form>
                  <input 
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                     placeholder="Email address *" 
                     required />
                  <input 
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password *" 
                    required />
                  <div className="loginSignUpForgetPass">
                    <label>
                      <input type="checkbox" className="brandRadio" />
                      <p>Remember me</p>
                    </label>
                    <p>
                      <Link to="/resetPassword">Lost password?</Link>
                    </p>
                  </div>
                  <button onClick={handleLoginSubmit}>Log In</button>
                </form>
                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    No account yet?{" "}
                    <span onClick={() => handleTab("tabButton2")}>
                      Create Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Tab2 */}

            {activeTab === "tabButton2" && (
              <div className="loginSignUpTabsContentRegister">
                <form onSubmit={handleRegisterSubmit}>
                  <input name="name"
                         type="text"
                         onChange={(e) => setName(e.target.value)} 
                         placeholder="Full Name..." 
                         required />
                  <input name="email"
                         type="email"
                         onClick={(e) => setEmail(e.target.value)}
                         placeholder="Email address *" 
                         required />
                  <input name="mobile"
                         type="text"
                         onClick={(e) => setMobile(e.target.value)}
                         placeholder="000 - 000 - 0000" 
                         required />
                  <input name="password"
                         type="password"
                         onClick={(e) => setPassword(e.target.value)}
                         placeholder="Password *" 
                         required />
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <Link
                      to="/terms"
                      style={{ textDecoration: "none", color: "#c32929" }}
                    >
                      {" "}
                      privacy policy
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    onClick={handleRegisterSubmit}
                > 
                Register
                </button>
                </form>

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
