import React, { useState } from "react";
import styles from './Login.module.css'
import Input from '../Input/Input'
import { Link, useNavigate } from "react-router-dom";
import createUserWithEmailAndPassword, { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true)

        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false)
                navigate('/');
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message)
            });
    };
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>
                <Input label="Email" 
                onChange = {(event) => {
                    setValues((prev) => ({...prev, email: event.target.value}))
                }}
                placeholder="Enter email address" />
                <Input label="Password" 
                onChange = {(event) => {
                    setValues((prev) => ({...prev, pass: event.target.value}))
                }}
                placeholder="Enter password" />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                    <p>
                        Don't have an account?{" "}
                        <span>
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}


export default Login;