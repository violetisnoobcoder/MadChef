import React from "react";
import "./splash.scss";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Splash() {
  return (
    // <div className="videoBg">
    //   <video autoPlay loop muted>
    //     <source src={VidBg} autoPlay loop></source>
    //   </video>
    //   <div className="text-wrapper"></div
    //   <h1>Welcome to MadChef!</h1>
    //   <h2>SEE YOUR FOOD</h2>

    <div class="jumbotron">
      <h1>Welcome to MadChef!</h1>
      <h2>SEE YOUR FOOD</h2>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            className="FormControl"
            placeholder="Search for recipe's here!"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-btn"
          />
          <Button className="btn btn-danger" id="meal-search-btn">
            Bash for your recipes!
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Splash;
