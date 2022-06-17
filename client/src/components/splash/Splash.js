import React from "react";
import "./splash.scss";
import { InputGroup, Button } from "react-bootstrap";
// import { Link } from "react-dom";

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
      <h1 className="slogan">FEELING CREATIVE?</h1>
      <h2 className="sloganBelow">TIME TO COMBINE MAD INGREDIENTS</h2>
      <div className="button-input">
        <InputGroup className="mb-3 d-flex justify-content-center">
          <a href="/RecipeBuilder" className="recipeBtn">
            <Button className="btn-danger btnSearch">
              LET'S BISH, BASH AND BOSH!
            </Button>
          </a>
        </InputGroup>
      </div>
    </div>
  );
}

export default Splash;
