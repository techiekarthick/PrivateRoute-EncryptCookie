import React from "react";
import Cookies from "universal-cookie";
import CryptoJS from "crypto-js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Authenticated extends React.Component {
  clearCookie = () => {
    const cookies = new Cookies();
    cookies.remove("username");
    cookies.remove("password");
    cookies.remove("mobile");
    cookies.remove("checkValue");
  };
  render() {
    const cookies = new Cookies();
    let checkUsername = cookies.get("username");
    let bytes = CryptoJS.AES.decrypt(checkUsername, "my-secret-key@123");
    let decryptedDatausername = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return (
      <div>
        <Link to="/">
          <button className="LogOut" onClick={this.clearCookie}>Logout</button>
        </Link>
        <h1 style={{ marginLeft: "-14%", display: "flex" }}>
          Hello
          <span style={{ color: "Green", marginLeft: "10px" }}>
            {decryptedDatausername}
          </span>
          , Welcome to the Login Page
        </h1>
      </div>
    );
  }
}
export default Authenticated;
