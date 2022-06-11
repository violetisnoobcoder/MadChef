import Splash from "../components/splash/Splash";
import "./home.scss";
import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
  Navbar,
} from "react-bootstrap";
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
