import React, { useState } from "react";
import Button from "../button/Button";
import Header from "../headers/Header";
import InputField from "../inputfield/InputField";
import { Link } from 'react-router-dom'
import "./loginStyle.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useLoginMutation } from "../../services/apis/AuthService";
const InputLogin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation()
  const data = { email, password }

  // API Integration
  const handleLogin = async (e) => {


    try {
      e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill all the mendatory field")

    }else{

      let payload = {
        email: email,
        password: password,
        phoneNumber: ""
      }
      let response = await login(payload)
      console.log(response)
      localStorage.setItem('email',email)
      if(response.data.roleName==='STORE_MANAGER'){
        navigate("/storemanager")
      toast.success("Logged In Successfully")

      }
      else if(response.data.roleName==='SUPER ADMIN'){
        navigate("/super-admin")
      toast.success("Logged In Successfully")

      }
      else if(response.data.roleName==='ADMIN'){
        navigate("/admin")
      toast.success("Logged In Successfully")

      }else{
        navigate("/role/dynamic")
        toast.success("Logged In Successfully")
      }

    }

    } catch (error) {
      toast.error( 'error')
    }

  };
  return (<>

         <ToastContainer  theme="colored" autoClose={2000}/>
    <div className="login-body">
      <div className="login-head">
        <img
          src="https://s3.amazonaws.com/rxkolan.com/images/logo.png"
          alt="logo"
        />
      </div>
      <div className="login-field">
        <div className="login-heading" >
          <h1>
            <label>Login</label>
          </h1>
          <Link to="">Register Now</Link>
        </div>
        <div>
          <InputField
            type={"email"}
            name={"Username"}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <InputField
            type={"password"}
            name={"Password"}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>
          <span>Forgot password ?</span>
        </p>
        <Button color="#007bff" type='button' name="Login" onClick={handleLogin} />
      </div>
    </div>
  </>

  );
};

export default InputLogin;
