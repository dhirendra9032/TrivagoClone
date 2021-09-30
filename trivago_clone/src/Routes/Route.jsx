import {Route, Switch} from "react-router-dom"
import Login from "../Components/Login/Login";
import LandingPage from "../Components/LandingPage/LandingPage"
import Signup from "../Components/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";


export const Routes = () => { 
    return (<>
          <Switch>
            <Route exact path="/login">
                <Login/>
                {/* hello Login */}
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            {/* <Route exact path="/navbar">
                <Navbar/>
            </Route> */}

             <Route>
                <h1>404 Not Found</h1>
            </Route>
          </Switch>
        {/* hello Routes */}
    </>);
}