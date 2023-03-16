import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import { UploadPage } from "./pages/UploadPage";
import { LearnToUse } from "./pages/LearnToUse";
import LoginPage from "./pages/LoginPage";
import { PathContext, UserContext } from "./components/UserContext";
import { useState } from "react";
import { About } from "./pages/About";
import { RegistrationPage } from "./pages/RegistrationPage";
import { RestoreImage } from "./pages/RestoreImage";

function App() {
    const [imagePath, setimagePath] = useState();
    const [user, setUser] = useState();
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <PathContext.Provider value={{ imagePath, setimagePath }}>
                    <Routes>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/Upload" element={<UploadPage />}></Route>
                        <Route path="/learn" element={<LearnToUse />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route
                            path="/restoreImage"
                            element={<RestoreImage />}
                        ></Route>
                        <Route
                            path="/registration"
                            element={<RegistrationPage />}
                        ></Route>
                    </Routes>
                </PathContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default App;
