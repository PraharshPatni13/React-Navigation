import { React, useState } from "react";
import "./CSS files/LoginPage.css";
import login_page from "./../Assests/login_page.png";
import show from "./../Assests/show.png";
import hide from "./../Assests/hide.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleImageToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.message);
      }
      // setUserName("");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div className="main-div">
      <div className="photo-container">
        <img src={login_page} alt="" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
         
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="image">
              <img
                src={showPassword ? hide : show}
                alt="Toggle Password Visibility"
                onClick={handleImageToggle}
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="link_for_register">
          <h4>haven't registered yet? </h4>
          <a href="#register">register</a>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
