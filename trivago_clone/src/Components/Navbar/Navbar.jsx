import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { token, user, logoutUser } = useContext(AuthContext);

  // function renderElement()
  // {
  //     console.log("in render");
  //     if (token.length === 0) {
  //        return (<Link to="/login"> <a>"Log in"</a></Link>)
  //     }
  //     else {
  //       return (  <select name="Menu">
  //             {/* <optgroup label={user.email}> */}
  //             <option>{user.email}</option>
  //             <option>Menu</option>
  //             <option>Recently viewed</option>
  //             <option>Booking overview</option>
  //             {/* </optgroup> */}
  //         </select>
  //       )
  //     }
  // }

  async function handleLogout() {
    console.log("in logout");
    logoutUser("123");
    return;
  }

  return (
    <div className="Navbar">
      <div
        className="lo"
        style={{
          width: "10%",
          marginleft: "10%",
          padding: "0",
        }}
      >
        <Link to="/">
          <img
            style={{
              width: "80%",
              height: "40px",
              verticalAlign: "textTop",
              marginTop: "0",
            }}
            src="./triLogo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="first">
        <Link to="/">
          {" "}
          <a>
            <i
              style={{ width: "30px", fontSize: "15px" }}
              class="fas fa-bed"
            ></i>{" "}
            Stays
          </a>
        </Link>
        {/* <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> */}
        <a>
          {" "}
          <i
            style={{ width: "30px", fontSize: "15px" }}
            class="fas fa-map-marker-alt"
          ></i>
          Weekend
        </a>
        <a>
          {" "}
          <i
            style={{ width: "30px", fontSize: "15px" }}
            class="fas fa-car-alt"
          ></i>
          Cars
        </a>
        <a>
          {" "}
          <i
            style={{ width: "30px", fontSize: "15px" }}
            class="fas fa-fighter-jet"
          ></i>
          Flights
        </a>
        <a>
          {" "}
          <i
            style={{ width: "30px", fontSize: "15px" }}
            class="fas fa-suitcase"
          ></i>
          Packages
        </a>
      </div>

      {/* <div className="second"> */}

      {(() => {
        if (token.length === 0) {
          return (
            <div class="secondlogin">
              <Link to="/login">
                {" "}
                <a class="login">Log in</a>
              </Link>
              <div class="dropdown1">
                {/* <button class="dropbtn1">Menu</button> */}
                <a class="dropbtn1">Menu</a>
                <div class="dropdown-content1">
                  <a href="#">Recently Viewed</a>
                  <a href="#">Booking Overview</a>
                </div>
              </div>
              <select name="INR">
                <option>INR</option>
                <option>EUR - Euro</option>
                <option>AED - Emirat Dirham</option>
                <option>TRY - Turkish Lira</option>
                <option>GBR - British Pound</option>
                <option>USD - US Dollar</option>
                <option>INR - Indian Rupee</option>
                <option>JPY - Japanese Yen</option>
                <option>TBH - Thai Baht</option>
                <option>ZAR - South African Rand</option>
                <option>RUB - Russian Ruble</option>
              </select>
            </div>
          );
          // console.log("in if condition");
        } else {
          return (
            <div class="secondlogin">
              <div class="dropdown">
                {/* <button class="dropbtn">{user.email}</button> */}
                <a class="dropbtn">{user.email}</a>
                <div class="dropdown-content">
                  <a href="#">Recently Viewed</a>
                  <a href="#">Booking Overview</a>
                  <Link to="/">
                    {" "}
                    <a onClick={handleLogout}>Log Out</a>
                  </Link>
                </div>
              </div>

              <select name="INR">
                <option>INR</option>
                <option>EUR - Euro</option>
                <option>AED - Emirat Dirham</option>
                <option>TRY - Turkish Lira</option>
                <option>GBR - British Pound</option>
                <option>USD - US Dollar</option>
                <option>INR - Indian Rupee</option>
                <option>JPY - Japanese Yen</option>
                <option>TBH - Thai Baht</option>
                <option>ZAR - South African Rand</option>
                <option>RUB - Russian Ruble</option>
              </select>
            </div>
          );
        }
      })()}
    </div>
    // </div>
  );
}
