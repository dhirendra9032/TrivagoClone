import "./LandingPage.css";
// import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
export default function landingPage() {
  return (
    <>
      <div className="Matter">
        <div className="Logo">
          <img className="trivago" src="./tlogo.png" alt="/" />
        </div>
        <div className="l"></div>
        <div className="Deals">
          <h2>Deals from your favourite booking sites. All in one place.</h2>
          <div>
            Try searching for a city, a specific hotel, or even a landmark!
          </div>
        </div>
      </div>
    </>
  );
}
