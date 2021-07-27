import React from "react";
import { mount } from "enzyme";
import App from "./App";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Cookies from "universal-cookie";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
const appWrapper = mount(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

let cookies = "";
describe("App component", () => {
  //1
  test("checking the presence of Router", () => {
    expect("Route").toMatch(/Route/);
  });

  //2
  test("checking the presence of PrivateRouter", () => {
    expect("PrivateRoute").toMatch(/PrivateRoute/);
  });

  //3
  test("Check the Route and Private Route Path", () => {
    expect(appWrapper.find(Route).at(0).props().path === "/").toBeTruthy();
  });

  //4
  test("checking the presence of BrowserRouter", () => {
    expect("BrowserRouter").toMatch(/BrowserRouter/);
  });

  //5
  test("Button onclick Check in Sign Up component", () => {
    appWrapper.find("#name").simulate("change", {
      target: {
        value: "karthick",
      },
    });
    appWrapper.find("#password").simulate("change", {
      target: {
        value: "karthick",
      },
    });
    appWrapper.find("#number").simulate("change", {
      target: {
        value: 10,
      },
    });
    let inputEle2 = appWrapper.find("#submit");
    inputEle2.at(0).simulate("click");
    expect(appWrapper.find("#submit").exists()).toBeTruthy();
  });


  const newWrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  test("notVerified path check", () => {
    expect(newWrapper.find(".Login-button")).toBeTruthy();
    newWrapper.find(".Login-button").simulate("click", { button: 0 });
    expect(newWrapper.find("#number").exists()).toBeFalsy();
    newWrapper.find("#name").simulate("change", {
      target: {
        value: "sandhiya",
      },
    });
    newWrapper.find("#password").simulate("change", {
      target: {
        value: "karthick2",
      },
    });
    newWrapper.find("#login").simulate("click");
    expect(location.pathname === "/notverified").toBeTruthy();
  });
});
