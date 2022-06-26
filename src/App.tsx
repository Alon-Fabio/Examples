import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/AppearingNavBarSim/NavBar/Navbar";
import UserLopFix from "./Learning/UserLoping/UserLopFix";
import UserLopBug from "./Learning/UserLoping/UserLopBug";

function App() {
  const [route, setRoute] = useState("");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App">
      <header>
        <NavBar onRouteChange={onRouteChange} />
      </header>
      <section>
        <h1>Learning</h1>
        <UserLopBug />
        <UserLopFix />
      </section>
    </div>
  );
}

export default App;
