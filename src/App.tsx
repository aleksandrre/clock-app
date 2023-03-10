import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "./components/styles/Global";
import { themeLight } from "./components/styles/themeLight";
import { themeDark } from "./components/styles/themDark";
import { fontSize } from "./components/styles/fontSize";
import {
  DivactiveDiv,
  Noactive,
} from "./components/mobile.component/mobile.styled.component";
import iconsun from "./assets/desktop/icon-sun.svg";
import iconrefresh from "./assets/desktop/icon-refresh.svg";
import arrowdown from "./assets/desktop/icon-arrow-down.svg";
import arrowup from "./assets/desktop/icon-arrow-up.svg";

function App() {
  let time = new Date();
  const [color, setColor] = useState(true);
  const [theme, setTheme] = useState(themeLight);
  const [noactive, setNoactive] = useState(true);
  const [currentTime, setCurrentTime] = useState([
    time.getHours(),
    time.getMinutes(),
  ]);
  const updateTime = () => {
    let time = new Date();
    setCurrentTime([time.getHours(), time.getMinutes()]);
  };
  setInterval(updateTime, 60000);

  const changetheme = () => {
    setColor(!color);
    setTheme(color ? themeLight : themeDark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles fontSize={fontSize} />
      <Noactive fontSize={fontSize} noactive={noactive}>
        <div className="divrefresh">
          <p className="p1">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.” Ada Lovelace
          </p>
          <img className="imgrefresh" src={iconrefresh} onClick={changetheme} />
        </div>
        <section className="section1">
          <section>
            <img src={iconsun} />
            <h3> {theme.title.hititle}</h3>
          </section>
          <section>
            <p>
              {currentTime[0] +
                ":" +
                (currentTime[1] < 10 ? "0" + currentTime[1] : currentTime[1])}
            </p>
            <h4>BST</h4>
          </section>
          <h3>IN LONDON, UK</h3>
          <div>
            MORE
            <div onClick={() => setNoactive(!noactive)}>
              <img src={noactive ? arrowdown : arrowup} />
            </div>
          </div>
        </section>
      </Noactive>

      <DivactiveDiv fontSize={fontSize}>
        <div className="divmaindiv">
          <div className="divchild">
            <div className="divchildren">
              <h1>CURRENT TIMEZONE</h1>
              <h2>Europe/London</h2>
            </div>
            <div className="divchildren">
              <h1>DAY OF THE YEAR</h1>
              <h2>295</h2>
            </div>
          </div>
          <div className="divchild">
            <div className="divchildren">
              <h1>DAY OF THE WEEK</h1>
              <h2>5</h2>
            </div>
            <div className="divchildren">
              <h1>WEEK NUMBER</h1>
              <h2>42</h2>
            </div>
          </div>
        </div>
      </DivactiveDiv>
    </ThemeProvider>
  );
}

export default App;
