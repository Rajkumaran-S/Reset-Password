import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import Resetpassword from "./Pages/Resetpassword";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forgotpasword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <>
                <Resetpassword />
              </>
            }
          />
          <Route
            path="/Forgotpassword"
            element={
              <>
                <Forgotpasword />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
