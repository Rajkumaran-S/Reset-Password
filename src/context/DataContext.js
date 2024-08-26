import {createContext, useState, useEffect } from "react"
import Resetpassword from "./Pages/Resetpassword";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forgotpasword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Header from "./components/Header";


const DataContext = createContext({})

export const DataProvider = ({children}) => {

    let [role, setRole] = useState("");
    

    
 useEffect(() => {
  if (!userData) {
    logout();
  } else {
    setRole(userData.role);
  }
}, []);

const handleCancel = () => {
  navigate("/");
};

const handleSubmit1 = async (values, { setSubmitting }) => {
  try {
    const response = await AxiosService.post("/user/resetpassword", values);
    toast.success(`OTP and Link Sent Successfully to ${values.email}`);
    navigate("/resetpassword");
    console.log(response.data.message);
  } catch (error) {
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  } finally {
    setSubmitting(false);
  }
};

const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const response = await AxiosService.post("/user/reset-password", {
      token: values.token,
      password: values.password,
    });

    // Assuming your backend returns a message on success
    toast.success(response.data.message);
    navigate("/");
  } catch (error) {
    // Handle errors from the backend
    if (error.response.status === 404) {
      toast.error(error.response.data.message);
    }
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      navigate("/");
    }
  } finally {
    setSubmitting(false);
  }
};

const handleLogin = async (values, { setSubmitting }) => {
  try {
    const response = await AxiosService.post("/user/signin", values);
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/Home");
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem(
        "userData",
        JSON.stringify(response.data.userData)
      );
    }
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    setSubmitting(false);
  }
};

const handleSignup = async (values, { setSubmitting }) => {
  try {
    setSubmitting(true);

    const response = await AxiosService.post("/user/signup", values);
    console.log(response.data.message);
    toast.success(response.data.message);
    navigate("/");
  } catch (error) {
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  } finally {
    setSubmitting(false);
  }
};

    return (
    <DataContext.Provider value= {{
        role,setRole,useEffect,handleCancel,
        handleSubmit1,handleSubmit,handleLogin,
        handleSignup
    }}>
    {children}
    </DataContext.Provider>
    )
    }
    
    export default DataContext