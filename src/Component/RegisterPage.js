import React, { useState } from "react";
import "./CSS files/RegisterPage.css";
import hide from "./../Assests/hide.png";
import show from "./../Assests/show.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };
  const handleImageToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="maincontainer_for_register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="user_details">
          <div>
            <div className="details">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="error_message">
              {errors.username && <p>{errors.username}</p>}
            </div>
          </div>

          <div>
            <div className="details">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="error_message">
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>

          <div className="password_register">
            <div className="details">
              <label>Password: </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="error_message">
              {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="image">
              <img
                src={showPassword ? hide : show}
                alt=""
                onClick={handleImageToggle}
              />
            </div>
          </div>

          <div>
            <div className="details">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="error_message">
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
          </div>

          <button type="submit">Register</button>

          <div className="link_for_login">
            <h4>already have an account? </h4>
            <a href="#login">login</a>
          </div>
        </div>
      </form>
      <div className="image_container">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default RegisterPage;
