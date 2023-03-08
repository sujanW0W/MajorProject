import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

import "./LoginPage.css";
const LoginPage = () => {
    const navigate = useNavigate();

    const { User, setUser } = useContext(UserContext);
    const [newUsername, setUsername] = useState();
    const [newPassword, setPassword] = useState();

    const takevalue = () => {
        return {
            username: newUsername,
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
        setUser(true);
        console.log(Datas);
        setPassword("");
        setUsername("");
        navigate("/");
    };

    return (
        <div>
            <div className="lomain-container">
                <div className="losubmain-container">
                    <img src="img/cologo.png"></img>
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
                        <p style={{ color: "#000", marginTop: "40px" }}>
                            Don't have an account?{" "}
                            <Link to={"/registration"}>Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
