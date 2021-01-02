import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from './helpers/Api';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpwd, setConfirmpwd] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        if(validFormInput()){
            Register({email, password, confirmpwd, phone})
            .then(response => {
                if(response.status === 200){
                    toast.success('Register Succesfully!',{position: toast.POSITION.TOP_RIGHT});
                    history.push("/dashboard")
               }
            })
            .catch(err => {
                toast.error('Register Unsuccessfull!',{position: toast.POSITION.TOP_RIGHT})
            })  
        }
    }


    const validFormInput = () => {
        let error = {};
        let isValid = true;

        if(!email){
            isValid= false;
            error['email'] = `please enter the email.`
        }

        if(!password){
            isValid = false;
            error['password'] = `Please enter the password`
        }

        if(!confirmpwd) {
            isValid = false;
            error['confirmpwd'] = `Please enter the confirm password`
        }

        if(!phone) {
            isValid = false;
            error['phone'] = `Please enter the phone`
        }

        if(typeof password !== undefined && typeof confirmpwd !== undefined) {
            if(password !== confirmpwd){
                isValid = false;
                error['password'] = 'password does not match.'
                error['confirmpwd'] = 'confirm password and password does not match'
            }
        }

        setError(error);
        return isValid;
    }

    return (
        <div>
        {
           <div className="page-content--bge5">
            <div className="container">
                <div className="login-wrap">
                    <div className="login-content">
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input 
                                        className="au-input au-input--full" 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <div className="text-danger">{error.email}</div>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        className="au-input au-input--full" 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                     <div className="text-danger">{error.password}</div>
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input 
                                        className="au-input au-input--full" 
                                        type="password" 
                                        name="confirmpassword" 
                                        placeholder="Confirm Password" 
                                        onChange={e => setConfirmpwd(e.target.value)}
                                    />
                                     <div className="text-danger">{error.confirmpwd}</div>
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        className="au-input au-input--full" 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Phone" 
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                     <div className="text-danger">{error.phone}</div>
                                </div>

                                <div className="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" />Remember Me
                                    </label>
                                    <label>
                                        <a href="//#endregion">Forgotten Password?</a>
                                    </label>
                                </div>

                                <button 
                                    className="au-btn au-btn--block au-btn--green m-b-20" 
                                    type="submit"
                                    >sign up
                                </button>

                            </form>
                            <div className="register-link">
                                <p>
                                    Already registered
                                    <Link to="/Login" > Login Here</Link>
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
           </div>
        }
        
    </div>
    )
}

export default Signup;
