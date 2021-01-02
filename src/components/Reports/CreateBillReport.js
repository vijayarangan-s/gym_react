import React from 'react'
import "./reports.css"
import logo from "../../img/logo-oct.png"
import moment from 'moment'
import {Link} from 'react-router-dom'

export default function CreateBillReport(props) {

    const address = `Plot No-2.Sonaimuthu servai Towers Y.Othakkadai Madurai-625107`
    const phone =`phone.no : +91 73977 93930, 0452-4962288`

    return (
        <div className="report-theme text-center">
            <img src={logo}  className="logo"/>
            <p className="text-dark p-text">{address}</p>
            <p className="text-dark p-text">{phone}</p>

            <div className="customer-detail p-text">
                <p className="text-dark">Customer Name : {`Vijayarangan`}</p> 
                <p className="text-dark">Bill ID : {`001`}</p> 
                <p className="text-dark">Date : {moment().format("DD-MM-YYYY hh:mm:ss A")}</p> 
            </div >

            <div className="table-align">
                <table>
                    <thead>
                        <tr>
                            <th className="text-dark">Name</th>
                            <th className="text-dark">Package Name</th>
                            <th className="text-dark">Charge</th>
                            <th className="text-dark">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-dark">Vijayarangan</td>
                            <td className="text-dark">Monthly</td>
                            <td className="text-dark">3000</td>
                            <td className="text-dark">3000</td>
                        </tr>
                        
                    </tbody>
                </table>
                <p className="text-dark text-right mt-10"> Actual Amount : 3000 &nbsp;</p>
                <p className="text-dark text-right mt-10"> Discount : 3000 &nbsp;</p>
                <p className="text-dark text-right mt-10"> Paid Amount : 3000 &nbsp;</p>

                <table className="mt-30">
                    <thead>
                        <tr>
                            <th className="text-dark" style={{columnWidth:"440px"}}>Date</th>
                            <th className="text-dark" style={{columnWidth:"440px"}}>Payment Amount</th>
                            <th className="text-dark" style={{columnWidth:"440px"}}>Collected Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-dark">{moment().format("DD-MM-YYYY")}</td>
                            <td className="text-dark">Cash</td>
                            <td className="text-dark">3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-dark">🙏🙏🙏 Thanks for Visting Us....🙏🙏🙏</p>
            <button onClick={() => window.print()} className="mb-4 btn btn-primary"> Print</button>
            <Link to="/CreateBill" style={{marginLeft:"20px"}}><button  className="mb-4 btn btn-primary"> Back</button></Link>
        </div>
    )
}
