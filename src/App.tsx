import React, { useState } from "react";
import "./App.css";

// Scrollbar.
import "./cssElements/CustomScrollbar/CustomScrollbar.css";

// Parallax scrolling.
import "./cssElements/ParallaxScrolling/ParallaxScrolling.css";
import CloverIMG from "./cssElements/ParallaxScrolling/Images/Clover.png";
import BohkeIMG from "./cssElements/ParallaxScrolling/Images/Bohke.png";

// Navigation.
import NavBar from "./Components/AppearingNavBarSim/NavBar/Navbar";

// Learning/Testing
import UserLopFix from "./Learning/UserLoping/UserLopFix";
import UserLopBug from "./Learning/UserLoping/UserLopBug";

function App() {
  const [route, setRoute] = useState("");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App">
      {/* Navigation */}
      <NavBar onRouteChange={onRouteChange} />

      {/* Parallax Scrolling */}
      <div className=" scrollingPXcon" id="mainScrollEl">
        <div className="PSBGCon perspective3d">
          <section className="ParallaxContainer perspective3d">
            <div className="mainBG"></div>
            <img src={CloverIMG} alt="mainFG" className="mainFG" />
            <img src={BohkeIMG} alt="main2" className="main2" />
          </section>
        </div>
        <div className="perspective3d PSBoxCon">
          <section className="ParallaxContainer perspective3d">
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
        {/* Parallax Scrolling END */}

        {/* Learning/Testing */}
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
