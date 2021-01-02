import React from 'react'
import "./theme.css"
import Header from "./Header"
import SideBar from "./Sidebar"

export default function Package() {
    const FormContent = () => {
        return(
            <div>
                <div className="card ">
                          <div className="card-header table table-borderless table-data3 ">
                              <h3>Add Package</h3>
                          </div>
                          <div className="card-body">
                              <form>
                                  <div>
                                        <div className="form-group">
                                            <label>Package Name</label>
                                            <select className="au-input au-input--full"  style={{position:"relative", height:"45px"}}  name="package_name">
                                                    <option value="monthly">---Select your plan---</option>
                                                    <option value="monthly">Monthly Plan</option>
                                                    <option value="quarterly">Quarterly Plan</option>
                                                    <option value="elite">Half yearly Plan</option>
                                                    <option value="yearly">Yearly Plan</option>
                                            </select>
                                        </div>
        
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Price..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div>

                                        {/* <div className="form-group">
                                                <label>Personal Trainer</label>
                                                <input 
                                                    className="au-input au-input--full" 
                                                    type="email" 
                                                    name="email" 
                                                    placeholder="Please Enter your Trainer..."
                                                />
                                        </div>

                                        <div className="form-group">
                                            <label>Price</label>
                                            <input 
                                                name="mobile"
                                                placeholder="Please Enter Price..."
                                                className="au-input au-input--full" 
                                                type="text" 
                                            />
                                        </div> */}

                                        <div className="row d-flex justify-content-between">
                                            <button 
                                                className="au-btn au-btn--green enq_btn btn_mem" 
                                                type="submit"
                                                >Add Package
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
                  <Header  name="Package"/>
                  {/* <SideBar/> */}
                  <div className="enq_form">
                      {FormContent()}
                  </div>  
              </div>
          </div>
      )
}
