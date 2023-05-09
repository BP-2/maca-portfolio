import { useState } from "react";
import npLogo from "./assets/np-logo.png";
import cutlerLogo from "./assets/cutler-logo.jpeg";
import Gallery from "./Gallery";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <a href="https://brady-phelps.dev/" className="logo-brady">
          BP
        </a>
      </div>
      <div>
        <a href="https://www.nps.gov/index.htm" target="_blank">
          <img
            src={npLogo}
            className="logo"
            alt="National Parks Service Logo"
          />
        </a>
        <a href="https://www.ohio.edu/honors/cutler-scholars" target="_blank">
          <img src={cutlerLogo} className="logo react" alt="Cutler Logo" />
        </a>
      </div>
      <h1>MACA VR Portfolio</h1>
      <p className="read-the-docs">
        Special thanks to the National Parks Service and the team in the <a href = "https://www.nps.gov/maca/learn/management/staffandoffices.htm">Science and Resource Management Department </a>at 
        Mammoth Cave National Park for all the support shown to me throughout the experience, and a thanks to the <a href = "https://www.ohio.edu/honors/cutler-scholars">Cutler 
        Scholars program</a> for awarding me with the exploration learning grant to make this all possible.
        <br/><br/>
        One last thank you to my advisor <b>Liz Thomas</b>.  She made this summer one of the best experiences of my life and became both a mentor and one of my closest friends at the park.
        <br/><br/>
      </p>
      <Gallery/>
      <h3 className="marginzzz">Please feel free to reach out with questions!</h3>
      <p><a href="mailto:bp309420@ohio.edu">Email</a></p>
    </>
  );
}

export default App;
