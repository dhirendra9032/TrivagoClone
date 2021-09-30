import { useContext, useState } from "react"
import { useHistory } from "react-router";
import { AuthContext, link } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom"
import "./Signup.css";
import axios from "axios";

export default function Signup()
{
    const [formdata, setFormdata] = useState({ email: "", password: "" });
    async function handleSignup() {
        for (let key in formdata) {
            if (formdata[key].length === 0) {
                alert(`please enter all the details ${key} `)
                return
            }
        }
        // console.log(formdata,"formdata")
        const payload = formdata
        try {
            let user = await axios.post(`${link}/users`, payload)
            console.log(user,"user")
            history.push("/login")
        } catch (error) {
            console.log(error,"error")
        }
    }
    function handleChange(e) {
        setFormdata({ ...formdata,[e.target.name]: e.target.value })
    }
    const history = useHistory();

    return (
        <>
            <div className="Block">
                <div className="Logoimage">
                    <img className="loginimage" alt="kbh" src="http://mma.prnewswire.com/media/437948/trivago___Logo.jpg?p=facebook"></img>
                </div>
                <div className="Blockb">
                <div className="left">
                    <div className="account">Create an account</div>
                    <div className="emailpassword">Enter your email address and password to start</div>
                        <div className="email">Email address</div>
                        
                    <input type="text" placeholder="Enter email" onChange={handleChange} name="email"/>
                    <div className="password">Password</div>
                    <input type="text" placeholder="Enter password" onChange={handleChange} name="password"/>
                  <button className="loginbutton" onClick={handleSignup}>Signup</button>
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
            </>
    )
    
}