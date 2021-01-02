import React from 'react'
import "./theme.css"
import Header from "./Header"
import SideBar from "./Sidebar"

export default function Membership() {
    const FormContent = () => {
        return(
            <div>
                <div className="card crd">
                          <div className="card-header table table-borderless table-data3 ">
                              <h3>Add Membership</h3>
                          </div>
                          <div className="card-body">
                              <form>
                                  <div className="d-flex justify-content-start flex-wrap">
                                        <div className="form-group align_form"
                                        style={{width: "37%"}}>
                                            <label>Name</label>
                                            <input 
                                                name="name"
                                                placeholder="Please Enter your name..."
                                                className="au-input au-input--full" 
                                                style={{width:"103%"}}
                                                type="text" 
                                            />
                                        </div>
        
                                        <div className="form-group align_form">
                                            <label>Mobile Number</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Mobile Number..."
                                                className="au-input au-input--full" 
                                                style={{width:"116%"}}
                                                type="tel" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align"
                                        style={{width: "45%"}}>
                                                <label>Email Address</label>
                                                <input 
                                                    className="au-input au-input--full" 
                                                    style={{width:"84%"}}
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Email"
                                                />
                                            </div>

                                        <div className="form-group align_form mr_align"
                                            style={
                                                    {
                                                        left: "-74px",
                                                        width: "47%",
                                                        position: "relative"
                                                    }
                                                }>
                                            <label>Emergency Contact Number</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Emergency Contact Number..."
                                                className="au-input au-input--full" 
                                                style={{width:"89%"}}
                                                type="tel" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align">
                                            <label>Emergency Contact Name</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Emergency Contact Name..."
                                                className="au-input au-input--full"
                                                style={{width:"84%"}} 
                                                type="text" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align" style={{left: "-74px",position: "relative"}}>
                                            <label>Occupation</label>
                                            <input 
                                                name="occupation"
                                                style={{width:"123%"}}
                                                placeholder="Please Enter Occupation..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align"
                                         style={{width:"38%"}}>
                                            <label>Date of Birth</label>
                                            <input 
                                                name="date"
                                                className="au-input au-input--full" 
                                                type="date" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align">
                                            <label>Aadhar Card Number</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Aadhar Card Number..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align">
                                            <label>Current Address</label>
                                            <textarea  
                                                className="au-input au-input--full" 
                                                name="description" 
                                                placeholder="Please Enter your current address ...."
                                                rows="2" 
                                                cols="24" 
                                            />
                                        </div>
                                        
                                        <div className="form-group align_form mr_align">
                                            <label>Add Package</label>
                                            <input 
                                                name="add_package"
                                                style={{width:"118%"}}
                                                placeholder="Add Package..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div>

                                        <div className="form-group align_form mr_align"
                                            style={{width:"40%"}}>
                                            <label>Package Name</label>
                                            <select className="au-input au-input--full"  style={{position:"relative", height:"45px"}}  name="package_name">
                                                    <option value="monthly">---Select your plan---</option>
                                                    <option value="monthly">Monthly Plan</option>
                                                    <option value="quarterly">Quarterly Plan</option>
                                                    <option value="elite">Half yearly Plan</option>
                                                    <option value="yearly">Yearly Plan</option>
                                            </select>
                                        </div>

                                        

                                        <div className="form-group align_form mr_align"
                                            style={{width:"36%"}}>
                                            <label>Price</label>
                                            <input 
                                                name="price"
                                                placeholder="Enter the Price..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div>
                                        
                                        <div className="row d-flex justify-content-between">
                                            <button 
                                                className="au-btn au-btn--green enq_btn btn_mem" 
                                                type="submit"
                                                >Add Membership
                                            </button>
                                        </div>
                                  </div>
                              </form>
                          </div>
                 </div>
            </div>
        )
    }
  
  
      return (
          <div>
              <div className="postion-fixed">
                  <Header  name="Membership"/>
                  {/* <SideBar/> */}
                  <div className="enq_form" >
                      {FormContent()}
                  </div>  
              </div>
          </div>
      )
}
