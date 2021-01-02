import React, {useState} from 'react'
import "./theme.css"
import Header from "./Header"
import SideBar from "./Sidebar"
import {Link} from "react-router-dom";
import {enquiry} from "./helpers/Api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Enquiry() {

  const FormContent = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [desc, setDesc] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        if(validFormInput()){
            enquiry({name, mobile, desc})
            .then(response => {
                if(response.status === 200){
                    toast.success('Enquiry Data save successfully...!',{position: toast.POSITION.TOP_RIGHT});
            }
            })
            .catch(err => {
                toast.error('Please Enter the Mandatory Fileds correctly!',{position: toast.POSITION.TOP_RIGHT})
            })
        }
    }

    const validFormInput = () => {

        let error = {};
        let isValid = true;

        if(!name){
            isValid= false;
            error['name'] = `please enter the name.`
        }

        if(!mobile){
            isValid = false;
            error['mobile'] = `Please enter the mobile number`
        }

        setError(error);
        return isValid;
    }

      return(

          <div>
              <div className="card">
                        <div className="card-header table table-borderless table-data3 ">
                            <h3>Add Enquiry</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name <span className="text-danger">*</span></label>
                                    <input 
                                        name="name"
                                        placeholder="Please Enter your name..."
                                        className="au-input au-input--full" 
                                        type="text" 
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <div className="text-danger">{error.name}</div>
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number <span className="text-danger">*</span></label>
                                    <input 
                                        name="mobile"
                                        placeholder="Please Enter Mobile Number..."
                                        className="au-input au-input--full" 
                                        type="tel" 
                                        onChange = {e=> setMobile(e.target.value)}
                                    />
                                    <div className="text-danger">{error.mobile}</div>
                                </div>

                                <div className="form-group">
                                    <label>Description(optional)</label>
                                    <textarea  
                                        className="au-input au-input--full" 
                                        name="description" 
                                        rows="2" 
                                        cols="50" 
                                        onChange= {e => setDesc(e.target.value)}
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button 
                                        className="au-btn au-btn--green enq_btn" 
                                        type="submit"
                                        onClick = {handleSubmit}
                                        >Save
                                    </button>

                                    <Link to="/AddMembership">
                                        <button 
                                            className="au-btn au-btn--green enq_btn" 
                                            type="submit"
                                            >Add Membership
                                        </button>
                                    </Link>
                                </div>
                                
                            </form>
                        </div>
               </div>
          </div>
      )
  }


    return (
        <div>
            <div>
                <Header name="Add Enquiry"/>
                <div className="enq_form">
                    {FormContent()}
                </div> 
            </div>
            {/* <div className="enq_form">
                {FormContent()}
            </div>   */}
        </div>
    )
}
