import Splash from "../components/splash/Splash";
import "./home.scss";
import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

const Home = () => {
  return (
    <div className="home">
      <Splash />
    </div>
  );
};

export default Home;
