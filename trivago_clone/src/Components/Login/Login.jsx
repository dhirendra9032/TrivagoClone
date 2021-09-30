import { useContext, useState } from "react"
import { useHistory } from "react-router";
import { AuthContext, link } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom"
import "./Login";
import axios from "axios";

export default function Login()
{
    const [formdata, setFormdata] = useState({});
    const { handleTokenChange,handleUserChange } = useContext(AuthContext);

    const history = useHistory();
    function handleChange(e) {
        setFormdata({ ...formdata,[e.target.name]: e.target.value })
    }
    async function handleLogin() {
        let {data} = await axios.get(`${link}/users`)
        for (let i = 0; i < data.length; i++){
            if (data[i].email === formdata.email && data[i].password===formdata.password && data[i].password!=null && data[i].email !=null) {
                handleTokenChange("12345")
                handleUserChange(data[i])
                console.log("user loggred in")
                return history.push("/");
            }
        }
        alert("email or password is wrong")
    }
    return (
        <>
            <div className="Block">
                <div className="Logoimage">
                    <img className="loginimage" alt="/" src="http://mma.prnewswire.com/media/437948/trivago___Logo.jpg?p=facebook"></img>
                </div>
                <div className="Blockb">
                <div className="left">
                    <div className="account">Log into account</div>
                    <div className="emailpassword">Enter your email address and password to start</div>
                    <div className="email">Email address</div>
                    <input type="text" placeholder="Enter email" onChange={handleChange} name="email"/>
                    <div className="password">Password</div>
                    <input type="text" placeholder="Enter password" onChange={handleChange} name="password"/>
                     <button className="loginbutton" onClick={handleLogin}>Login</button>
                </div>
                <div className="right">
                    <div className="usetrivago">or Use trivago with another account</div>
                        <button>Continue with google</button>
                        <button>Continue with Facebook</button>
                    <button>Continue with Apple</button>
                    </div>
                    </div>
                <div>Remember by signing up, you are agreeing to our Privacy Policy and Terms of Use.</div>
            </div>

            <div>
                <h1>Dont you have an account yet?</h1>
                <Link to="/signup"><button>Create account</button></Link>
            </div>
            </>
    )
    
}