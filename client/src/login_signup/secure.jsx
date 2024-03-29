import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import * as RB from "react-bootstrap";
import * as MB from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./style.css";

const Secure = () => {
  const navigate = useNavigate();
  const [d_mode, set_d_mode] = useState("sign_in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const switch_signin_signup = () => {
  //   if (d_mode === "sign_in") {
  //     set_d_mode("sign_up");
  //   } else {
  //     set_d_mode("sign_in");
  //   }
  // };

  const btn_submit = (e) => {
    if (d_mode === "sign_in") {
      on_login(e);
    } else {
      on_signup(e);
    }
  };

  const on_login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        let user_obj = {"name":"","email":""}
        console.log("user Data", user);
        user_obj["email"] = user["email"] || ""
        user_obj["name"] = user["name"] || user["email"] || ""
        localStorage.setItem("user_obj", JSON.stringify(user_obj));
        localStorage.setItem("auth_token", user["accessToken"]);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const on_signup = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/secure");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <RB.Row>&nbsp;</RB.Row>
      <RB.Row>&nbsp;</RB.Row>
      <RB.Row>&nbsp;</RB.Row>
      <RB.Row>
        <RB.Col></RB.Col>
        <RB.Col>
          <RB.Row>
            {/* <RB.Col xs={2}></RB.Col> */}
            <RB.Col>
              <h2 className="text-center">Welcome To Delphi</h2>
            </RB.Col>
            {/* <RB.Col xs={2}></RB.Col> */}
          </RB.Row>
        </RB.Col>
        <RB.Col></RB.Col>
      </RB.Row>
      <RB.Row>&nbsp;</RB.Row>
      <RB.Row>
        <RB.Col></RB.Col>
        <RB.Col>
          <RB.Row>
            <MB.Stack>
              <MB.FormControl variant="outlined">
                <MB.InputLabel>Email ID</MB.InputLabel>
                <MB.OutlinedInput
                  label="Email ID"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MB.FormControl>
            </MB.Stack>
          </RB.Row>
          <RB.Row>&nbsp;</RB.Row>

          <RB.Row>
            <MB.Stack>
              <MB.FormControl variant="outlined">
                <MB.InputLabel htmlFor="outlined-adornment-password">
                  Password
                </MB.InputLabel>
                <MB.OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <MB.InputAdornment position="end">
                      <MB.IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </MB.IconButton>
                    </MB.InputAdornment>
                  }
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </MB.FormControl>
            </MB.Stack>
          </RB.Row>
          <RB.Row>&nbsp;</RB.Row>
          <RB.Row>
            <MB.Stack>
              <MB.Button variant="contained" onClick={btn_submit}>
                {d_mode === "sign_in" ? "Sign In" : "Sign Up"}
              </MB.Button>
            </MB.Stack>
          </RB.Row>
          <RB.Row>&nbsp;</RB.Row>
        </RB.Col>
        <RB.Col></RB.Col>
      </RB.Row>
    </>
  );
};

export default Secure;
