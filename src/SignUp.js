import React, { Component } from "react";
import "./App.css";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CryptoJS from "crypto-js";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      mobile: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleChange1 = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleChange2 = (event) => {
    this.setState({
      mobile: event.target.value,
    });
  };

  handleClick = (e) => {
    const { username, password, mobile } = this.state;
    const cookies = new Cookies();
    let EncryptUsername = CryptoJS.AES.encrypt(
      JSON.stringify(username),
      "my-secret-key@123"
    ).toString();
    let EncryptPassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      "my-secret-key@123"
    ).toString();
    let EncryptMobile = CryptoJS.AES.encrypt(
      JSON.stringify(mobile),
      "my-secret-key@123"
    ).toString();
    cookies.set("username", EncryptUsername);
    cookies.set("password", EncryptPassword);
    cookies.set("mobile", EncryptMobile);
    e.preventDefault();
    this.setState({
      username: "",
      password: "",
      mobile: "",
    });
  };
  render() {
    const { username, password, mobile } = this.state;
    const cookies = new Cookies();
    cookies.set("cookies", username, password, mobile);
    return (
      <div className="container">
        <br />
        <div className="card">
          <div className="container2">
            <div className="login">
              <div className="login-triangle"></div>
              <h2 className="login-header">Account SignUp</h2>

              <form className="login-container">
                <p>
                  <input
                    type="text"
                    id="name"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => this.handleChange(e)}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => this.handleChange1(e)}
                  />
                </p>
                <p>
                  <input
                    id="number"
                    type="number"
                    value={mobile}
                    placeholder="Number"
                    onChange={(e) => this.handleChange2(e)}
                  />
                </p>
              </form>
            </div>
            <br />
            <button onClick={this.handleClick} id="submit">
              Submit
            </button>
            <Link to="/Login">
              <button className="Login-button">Login</button>
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
