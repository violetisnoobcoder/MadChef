import React from "react";
import Splash from "../components/splash/Splash";
// import Plate from "../components/plate/App"
import "./home.scss";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
  Navbar,
} from "react-bootstrap";
// import Footer from "../components/Footer/Footer";
import Auth from "../utils/auth";
import Picture from "../components/picture/Picture";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Splash />
    </div>
  );
};

export default Home;
