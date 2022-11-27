
import { Routes, Route, Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import './App.css'
import { UploadPage } from "./pages/UploadPage";
import { LearnToUse } from "./pages/LearnToUse";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { About } from "./pages/About";
import { RegistrationPage } from "./pages/RegistrationPage";




function App() {
  const [User, setUser] = useState();
  return (
    <div >
      <UserContext.Provider value={{ User, setUser }} >
          <Routes>
            <Route path="/" element={<Homepage />} ></Route>
            <Route path="/Upload" element={<UploadPage />}></Route>
            <Route path="/learn" element={<LearnToUse />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path="/registration" element={<RegistrationPage/>}></Route>
          </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
