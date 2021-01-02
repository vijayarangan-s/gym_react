import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Enquiry from "./Enquiry";
import Login from './Login'
import Signup from "./Signup";
import Membership from './Membership';
import Package from './Package';
import Reports from './Reports';
import CreateBill from './CreateBill';
import ProtectedRouter from './ProtectedRouter';
import createBillReport from './Reports/CreateBillReport';
import TodayReport from "./Reports/TodayReport";


export default function Routes() {
    return (
       <Router>
           <div>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Login" component={Login}/>
                <ProtectedRouter path="/dashboard" component={Dashboard} />
                <ProtectedRouter path="/Signup" component={Signup}/>
                <ProtectedRouter path="/Enquiry" component={Enquiry}/>
                <ProtectedRouter path="/AddMembership" component={Membership} />
                <ProtectedRouter path="/AddPackage" component={Package}/>
                <ProtectedRouter path="/CreateBill" component={CreateBill}/>
                <ProtectedRouter path="/Reports" component={Reports}/>
                <ProtectedRouter path="/createBillReport" component={createBillReport} />
                <ProtectedRouter path="/TodayReport" component={TodayReport} />
            </Switch>
           </div>
       </Router>
    )
}
