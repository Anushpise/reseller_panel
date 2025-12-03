import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resellerLogin } from "../Store/ResellerSlice";
import { loginReseller } from "../api/Resellerapi";
import "./Login.css";

const ResellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginReseller({ email: email.trim(), password });
      const { reseller } = res.data;

      const payload = {
        reseller: {
          name: reseller.name || reseller.businessName || "Reseller",
          email: reseller.email,
          image: reseller.logo || ""
        },
      subscriptionActive: reseller.subscriptionActive || false,
  subscription: reseller.subscription || null, 
};

      dispatch(resellerLogin(payload));
      localStorage.setItem("reseller", JSON.stringify(payload));

      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-xxl py-2 mt-4">
      <div className="container">
        <div className="row g-4">
          <center>
            <div className="login-container">
              <div className="login-box">
                <h2>Welcome back, Reseller!</h2>
                {error && <p className="error">{error}</p>}

                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    style={{ width: '100%', marginBottom: 20 }}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />

                  <div className="login-options">
                    <label className="remember-me">
                      <input type="checkbox" disabled={loading} /> 
                      <span>Keep me signed in</span>
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                  </div>

                  <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                  </button>

                  <p className="register-text">
                    New Reseller? <Link to="/reseller/register">Register Now</Link>
                  </p>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ResellerLogin;
