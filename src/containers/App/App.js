// @flow
import React from "react";
import {
  NavBar,
  NavBrand,
  NavItem,
  NavLink,
  NavDropDown,
  NavDivider
} from "../../components/NavBar";
import logo from "../../images/tandemly-full-logo-black-white.svg";
import Button from "../../components/Button";
import "./App.scss";

const App = () => (
  <div className="App">
    <NavBar
      transparent
      renderBrand={() => (
        <NavBrand url="http://tandem.ly">
          <img src={logo} alt="Tandem.ly Logo" width="112" height="28" />
        </NavBrand>
      )}
      renderLeft={() => [
        <NavItem>One</NavItem>,
        <NavItem tag="a">Two</NavItem>,
        <NavDropDown text="Drop Down">
          <NavLink>One</NavLink>
          <NavLink>Two</NavLink>
          <NavDivider />
          <NavLink>Three</NavLink>
          <NavLink>Four</NavLink>
        </NavDropDown>
      ]}
    />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Button text="Click Me" className="is-primary" />
  </div>
);

export default App;
