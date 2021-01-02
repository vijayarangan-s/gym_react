import React from 'react'
import "./theme.css"
import Header from "./Header"
import TodayReport from './Reports/TodayReport'
import {Link} from 'react-router-dom'

export default function Reports() {

    const reportTitle = [
            {
                heading: "Today Report",
                component:"TodayReport"
            },
            {
                heading: "Over All Report",
                component:"OverAllReport"
            },
            {
                heading: "Customer Report",
                component:"CustomerReport"
            },
            {
                heading: "Enquiry Report",
                component:"EnquiryReport"
            },
            {
                heading: "Bill wise report",
                component:"BillWiseReport"
            },
            {
                heading: "Cash, Card, UPI report",
                component:"CashCardUPIReport"
            },
            {
                heading: "Pending report",
                component:"PendingReport"
            },
            {
                heading: "Packages Personal Trainer Reports",
                component:"PackagesPersonalTrainerReport"
            },
            {
                heading:"Membership validity report",
                component: "MembershipValidityReport"
            }
        ]

    const FormContent = () => {
        return(
            <div className="d-flex flex-wrap">
               {
                   reportTitle.map((val, i) => (
                     <div  key={i}>
                        <div class="card btn btn-warning" style={{width: "15rem", height:"6rem", marginRight:"20px"}}>
                            <div class="card-body">
                                <h4 class="card-subtitle mb-2 text-light">
                                   <Link to={`/${val.component}`}> {val.heading}</Link>
                                </h4>
                            </div>
                        </div>
                     </div>
                   ))
               } 
            </div>
        )
    }
  
  
      return (
          <div className="master_bg">
              <div className="postion-fixed">
                  <Header  name="Reports"/>
                  {/* <SideBar/> */}
                    <div className="report_form">
                        {FormContent()}
                    </div> 
              </div>
              
          </div>
      )
}
