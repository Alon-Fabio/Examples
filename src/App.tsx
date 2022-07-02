import React, { useState } from "react";
import "./App.css";
import "./cssElements/ParallaxScrolling/ParallaxScrolling.css";
import NavBar from "./Components/AppearingNavBarSim/NavBar/Navbar";
import UserLopFix from "./Learning/UserLoping/UserLopFix";
import UserLopBug from "./Learning/UserLoping/UserLopBug";
import CloverIMG from "./cssElements/ParallaxScrolling/Images/Clover.png";
import BohkeIMG from "./cssElements/ParallaxScrolling/Images/Bohke.png";

function App() {
  const [route, setRoute] = useState("");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App">
      <NavBar onRouteChange={onRouteChange} />
      <div className=" scrollingPXcon" id="mainScrollEl">
        <div className="perspective3d exampleCon">
          <section className="ParallaxContainer perspective3d">
            <div className="mainBG"></div>
            <img src={CloverIMG} alt="mainFG" className="mainFG" />
            <img src={BohkeIMG} alt="main2" className="main2" />
          </section>
        </div>
        <div className="perspective3d exampleCon">
          <section
            className="ParallaxContainer perspective3d"
            style={{ justifyContent: "center" }}
          >
            <div className="perspective3d boxContainer ParallaxContainer">
              <div className="box front">1</div>
              <div className="box back">2</div>
              <div className="box up">3</div>
              <div className="box down">4</div>
              <div className="box left">5</div>
              <div className="box right">6</div>
            </div>
          </section>
        </div>
        <section style={{ backgroundColor: "#333" }}>
          <h1>Learning</h1>
          <UserLopBug />
          <UserLopFix />
        </section>
      </div>
    </div>
  );
}

export default App;
