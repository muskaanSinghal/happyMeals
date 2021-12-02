import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./Login.module.css";
import { loginActions } from "../Store/Store";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [demo, setDemo] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const [isLogInForm, setIsLoginForm] = useState(false);
  const [active, setActive] = useState(false);
  const emailRef = useRef();
  const value = useSelector((state) => state.loginSlice.idToken);
  console.log(value);
  const passwordRef = useRef();
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.includes("@") && password.length >= 7) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcdlqTJAECha-onlpn8f3TKDROoLxIzBA",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/JSON",
            },
          }
        );

        // if (!response.ok) throw new Error("Something Went Wrong !");
        const data = await response.json();
        console.log(data);
        if (data.idToken) {
          console.log(`i have successfully logged in`);
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const createAccountHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //validate
    if (password.length >= 7) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcdlqTJAECha-onlpn8f3TKDROoLxIzBA",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error("Something went wrong!");
        const data = await response.json();
        dispatch(loginActions.setIdToken({ payload: data.idToken }));
      } catch (err) {
        alert(err);
      }
    } else {
      alert(`invalid email id or password!`);
    }
  };
  useEffect(() => {
    if (params.id === "login") {
      setIsLoginForm(true);
      setActive(true);
    }

    if (params.id === "signup") {
      setIsLoginForm(false);
      setActive(true);
    }
  });

  return (
    <React.Fragment>
      {active && (
        <form className={styles.form}>
          <label className={styles.label}>Your Email Address :</label>
          <input type="email" className={styles.input} ref={emailRef} />
          <label className={styles.label}>Your Password :</label>
          <input type="text" className={styles.input} ref={passwordRef} />
          {!isLogInForm && (
            <button className={styles.btn} onClick={createAccountHandler}>
              Create Account
            </button>
          )}
          {isLogInForm && (
            <button className={styles.btn} onClick={loginHandler}>
              Log In
            </button>
          )}
        </form>
      )}
    </React.Fragment>
  );
};

export default Login;
