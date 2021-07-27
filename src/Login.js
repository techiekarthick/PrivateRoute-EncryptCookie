import React, { Component } from "react";
import "./App.css";
import Cookies from "universal-cookie";
import CryptoJS from "crypto-js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checkValue: false,
      handlecheck: false,
      isHide: false,
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

  checkSubmit = () => {
    const { username, password } = this.state;
    const cookies = new Cookies();
    let checkUsername = cookies.get("username");
    let bytes = CryptoJS.AES.decrypt(checkUsername, "my-secret-key@123");
    let decryptedDatausername = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    let checkPassword = cookies.get("password");
    let bytes1 = CryptoJS.AES.decrypt(checkPassword, "my-secret-key@123");
    let decryptedDatapassword = JSON.parse(bytes1.toString(CryptoJS.enc.Utf8));
    if (
      username === decryptedDatausername &&
      password === decryptedDatapassword
    ) {
      cookies.set("checkValue", true);
    } else {
      cookies.set("checkValue", false);
    }
    this.props.history.push("/authenticated");
  };

  render() {
    const { isHide } = this.state;
    return (
      <>
        <div
          className="container"
          style={{ display: isHide ? "none" : "block" }}
        >
          <br />
          <div className="card">
            <div className="container2">
              <div className="login">
                <div className="login-triangle"></div>
                <h2 className="login-header">Account Login</h2>

                <form className="login-container">
                  <p>
                    <input
                      type="text"
                      id="name"
                      placeholder="Username"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </p>
                  <p>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => this.handleChange1(e)}
                    />
                  </p>
                </form>
              </div>
              <br />
              <br />
              <button onClick={this.checkSubmit} id="login">
                Submit
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
export default Login;
