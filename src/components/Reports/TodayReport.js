import React, {useState} from 'react'
import "../theme.css"
import Header from "../Header"
import {Link} from 'react-router-dom'


export default function TodayReport() {
   
    const [open, setOpen] = useState(false)
    const data = [
        {
            customerCode:"001",
            customerName: "vijayarangan",
            package:"Monthly",
            trainer:"Geogre",
            totalAmount: "3000"
        },
        {
            customerCode:"002",
            customerName: "GnanaJothi",
            package:"Half Yearly",
            trainer:"Geogre",
            totalAmount: "7000"
        },
        {
            customerCode:"003",
            customerName: "Sabharish",
            package:"Yearly",
            trainer:"Geogre",
            totalAmount: "13000"
        }
    ]


    const handleClick = (e, data) => {
        e.preventDefault();
        console.log("data")
        setOpen(true)
    }

    const Modals = () => {
        return (
            <>
                <div class="modal1">
                    {/* <button class="close-modal" onClick={e => setOpen(false)}>&times;</button>
                    <h1>I'm a modal window 😍</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            `velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p> */}
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-light">Today Report</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                    onClick={e => setOpen(false)}>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                            <div class="modal-body">
                            <div class="table-responsive table--no-card m-b-40 bill_card">
                                <table class="table table-bordered  table-earning" >
                                    <thead>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Bill ID</th>
                                            <th>name</th>
                                            <th class="text-center">price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            <tr>
                                                <td>1</td>
                                                <td>code</td>
                                                <td>name</td>
                                                <td class="text-right">
                                                    <input  className="au-input au-input--full"  type="text"  style={{width:"105px"}} />
                                                </td>
                                                <td className="text-center"><i className="fa fa-trash" style={{color: "red"}} aria-hidden="true"></i></td>
                                            </tr>
                                        }

                                        <tr>
                                            <td class="text-right" colSpan="3"> Discount </td>
                                            <td class="text-center">
                                                <input  
                                                    type="text" class="form-control" id="exampleFormControlInput1"
                                                />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-right" colSpan="3">Total Amount</td>
                                            <td class="text-center">
                                                <input  
                                                type="text" class="form-control" id="exampleFormControlInput1"
                                                    />
                                            </td>
                                            <td></td>
                                        </tr>
                                    
                                        <tr>
                                            <td class="text-right" colSpan="3">Payment Type</td>
                                            <td class="text-center" colSpan="1">
                                                    <select class="form-control" 
                                                        style={{height:"45px"}}  name="package_name"
                                                    >
                                                            <option value="select" selected>---Select Payment Type---</option>
                                                            <option value="cash">Cash</option>
                                                            <option value="card">Card</option>
                                                            <option value="upi">UPI</option>
                                                    </select>
                                                </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-right" colSpan="3">Do you wanna upgrage a plan ?</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox">
                                                    <input 
                                                        type="checkbox" 
                                                        class="custom-control-input" 
                                                        id="customCheck1" 
                                                        />
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        { 
                                            <tr>
                                                <td class="text-right" colSpan="3">Update Plan</td>
                                                <td class="text-center" colSpan="1">
                                                    <select class="form-control"  
                                                        style={{height:"45px"}} 
                                                    >
                                                            <option value="select" selected>---Select your plan---</option>
                                                            <option value="monthly">Monthly Plan</option>
                                                            <option value="quarterly">Quarterly Plan</option>
                                                            <option value="halfyearly">Half yearly Plan</option>
                                                            <option value="yearly">Yearly Plan</option>
                                                    </select>
                                                </td>
                                                <td></td>
                                            </tr>
                                        }

                                        <tr>
                                            <td class="text-right" colSpan="3">Paid Amount</td>
                                            <td class="text-center">
                                                <input  
                                                    className="form-control" 
                                                    type="text" 
                                                    />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-right"  style={{border: "none"}} colSpan="5">
                                                <button 
                                                    className="au-btn au-btn--green enq_btn" 
                                                    type="submit"
                                                    >Place Order 
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <div class="modal-footer md-button">
                                <button type="button" onClick={e => setOpen(false)} class="btn btn-primary">Cancel</button>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="overlay1"></div>
            </>
        )
    }
    
      const dataTable = () => {
          return(
              <>
                <table id="html5-extension" class="table table-hover non-hover" style={{width:"98%"}}>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Customer Code</th>
                        <th>Customer Name</th>
                        <th>Packages</th>
                        <th>Trainers</th>
                        <th>Total Amount</th>
                        <th>View</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {  
                    data.map((val, i) => {
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{val.customerCode}</td>
                                <td>{val.customerName}</td>
                                <td>{val.package}</td>
                                <td>{val.trainer}</td>
                                <td>{`Rs.${val.totalAmount}`}</td>
                                <td>
                                    <button onClick={e => handleClick(e, val)} type="button" class="btn btn-success mb-2 mr-2" data-toggle="modal" data-target="#fadeupModal">View</button>
                                </td>
                            
                                <td>
                                    <div class="btn-group">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 table-cancel">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                            </path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        }
                     )
                    }
                </tbody>
            </table>        
           </> 
          )
      }
      return (
          <div className="master_bg">
              <div className="postion-fixed">
                  <Header  name="Reports"/>
                    <div className="report_form">
                        <div className="text-right">
                            <button className="btn btn-primary">Print</button>
                            <button className="btn btn-danger">PDF</button>
                            <button className="btn btn-warning">Excel</button>
                        </div>   
                        {dataTable()} 
                        {open && Modals()}                                           
                    </div> 
              </div>
              
          </div>
      )
}
