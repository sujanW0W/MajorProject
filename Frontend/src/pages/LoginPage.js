import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

import axios from "axios";

import "./LoginPage.css";
const LoginPage = () => {
    const navigate = useNavigate();

    const { User, setUser } = useContext(UserContext);
    const [newUsername, setUsername] = useState("");
    const [newPassword, setPassword] = useState("");

    const URL = "http://localhost:5000/api/v1/users";

    const takevalue = () => {
        return {
            userName: newUsername,
            password: newPassword,
        };
    };

    const titilechanger = (event) => {
        setUsername(event.target.value);
    };

    const passwordchanger = (event) => {
        setPassword(event.target.value);
    };

    const submithandler = async (event) => {
        event.preventDefault();
        const Datas = takevalue();
        setUser(Datas);
        //API call
        const response = await axios.post(`${URL}/login`, User);
        console.log(response);
        setPassword("");
        setUsername("");
        navigate("/");
    };

    return (
        <div>
            <div className="lomain-container">
                <div className="losubmain-container">
                    <img src="img/cologo.png" alt="NA" />
                </div>
                <h1
                    style={{
                        fontSize: "4vw",
                        color: "white",
                        fontWeight: "700",
                        marginTop: "100px",
                    }}
                >
                    Login
                </h1>
                <p
                    style={{
                        color: "white",
                        fontSize: "20px",
                        wordSpacing: "2px",
                        padding: "7px",
                    }}
                >
                    Sign in here to get started.
                </p>

                <div className="lo-main">
                    <form className="form_feild" onSubmit={submithandler}>
                        <div className="text_feild">
                            <label>Username</label>
                            <span></span>
                            <input
                                type="text"
                                onChange={titilechanger}
                                value={newUsername}
                            ></input>
                        </div>
                        <div className="text_feild">
                            <label>Password</label>
                            <span></span>
                            <input
                                type="password"
                                onChange={passwordchanger}
                                value={newPassword}
                            />
                        </div>
                        <div className="pass">Forget The Password?</div>
                        <button className="lo-sub" type="submit">
                            Sign In
                        </button>
                        <p
                            style={{
                                color: "white",
                                marginTop: "40px",
                                color: "#000",
                            }}
                        >
                            Don't have an account?
                            <a href="/">Create an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
