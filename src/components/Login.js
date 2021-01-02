import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from './helpers/Api';
import { useHistory } from 'react-router-dom';

toast.configure();

const Login = (props) => {
    let history = useHistory();
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        login({ username, password })
            .then(response => {
                console.log("respons/////", response)
                if (response.status === "true") {
                    toast.success('Login Succesfully!', { position: toast.POSITION.TOP_RIGHT });
                    history.push("/dashboard")
                } else {
                    toast.error('Invalid Username and Password!', { position: toast.POSITION.TOP_RIGHT })
                }
            })
            .catch(err => {
                toast.error('Please Enter the Login credentials correctly!', { position: toast.POSITION.TOP_RIGHT })
            })
    }

    return (
        <div>
            {
                <div class="form-container">
                    <div class="form-form align-middle">
                        <div class="form-form-wrap">
                            <div class="form-container">
                                <div class="form-content">
                                    <h1 class="">Log In to
                                        <a href="index-2.html">
                                            <span class="brand-name">&nbsp;Octangle</span>
                                        </a>
                                    </h1>
                                    <p class="signup-link"></p>
                                    <form class="text-left" onSubmit={handleSubmit}>
                                        <div class="form">

                                            <div id="username-field" class="field-wrapper input">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Username"
                                                    onChange={e => setusername(e.target.value)}
                                                />
                                            </div>

                                            <div id="password-field" class="field-wrapper input mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Password"
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </div>

                                            <div class="d-sm-flex justify-content-between">
                                                <div class="field-wrapper toggle-pass">
                                                    <p class="d-inline-block">Show Password</p>
                                                    <label class="switch s-primary">
                                                        <input type="checkbox" id="toggle-password" class="d-none" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                                <div class="field-wrapper">
                                                    <button type="submit" class="btn btn-primary" value="">Log In</button>
                                                </div>
                                            </div>

                                            <div class="field-wrapper text-center keep-logged-in">
                                                <div class="n-chk new-checkbox checkbox-outline-primary">
                                                    <label class="new-control new-checkbox checkbox-outline-primary">
                                                        <input type="checkbox" class="new-control-input" />
                                                        <span class="new-control-indicator"></span>Keep me logged in
                                                    </label>
                                                </div>
                                            </div>

                                            {/* <div class="field-wrapper">
                                                <a href="auth_pass_recovery.html" class="forgot-pass-link">Forgot Password?</a>
                                            </div> */}

                                        </div>
                                    </form>

                                    {/* <p class="terms-conditions">© 2019 All Rights Reserved. 
                                        CORK is a product of Designreset. 
                                        Cookie Preferences, 
                                        Privacy and 
                                        Terms.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}


export default Login;