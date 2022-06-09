import Navbar from "../../components/navbar/Navbar";
import Splash from "../../components/splash/Splash";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Splash />
    </div>
  );
};

export default Home;
