import React, {useEffect} from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import "./theme.css";

export default function Sidebar() {
    let pathname = window.location.pathname;

    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    
    const activeLink = {
        background: `rgba(96, 125, 139, 0.54)`,
        boxShadow: `0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)`,
        bordeRadius: `6px`,
        color: `#fafafa`
    }

    return (
        <div>
            {/* <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <Link to="/dashboard"> 
                        <img src={logo} /> 
                    </Link>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            <li>
                                <Link 
                                    style={pathname.match('/dashboard') ? {color:"red"} : {}}
                                    to="/dashboard" >
                                    <i className="fas fa-chart-bar"></i>Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    style={pathname.match('/Enquiry') ? {color:"red"} : {}} 
                                    to="/Enquiry">
                                    <i className="fas fa-table"></i>Enquiry
                                </Link>
                            </li>
                            <li>
                                <Link
                                    style={pathname.match('/AddMembership') ? {color:"red"} : {}} 
                                    to="/AddMembership">  
                                    <i className="far fa-check-square"></i>Membership
                                </Link>
                            </li>
                            <li>
                                <Link
                                    style={pathname.match('/AddPackage') ? {color:"red"} : {}}  
                                    to="/AddPackage">
                                    <i className="fas fa-calendar-alt"></i>Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    style={pathname.match('/CreateBill') ? {color:"red"} : {}}  
                                    to="/CreateBill">
                                    <i className="fas fa-map-marker-alt"></i>CreateBill
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    style={pathname.match('/Reports') ? {color:"red"} : {}}  
                                    to="/Reports">
                                    <i className="fas fa-map-marker-alt"></i>Reports
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside> */}

            <div class="main-container" id="container">
                <div class="overlay"></div>
                <div class="search-overlay"></div>

                {/* <!--  BEGIN SIDEBAR  --> */}
                <div class="sidebar-wrapper sidebar-theme">
                     <nav id="sidebar"
                       style={
                        {
                            background:"#060818",
                            minHeight:"100vh",
                            borderRight: "1px solid #0e1726"
                        }
                       }>
                        <div class="shadow-bottom"></div>
                        <ul class="list-unstyled menu-categories" id="accordionExample">
                            <li class="menu">
                                <Link to="/dashboard"  data-toggle="collapse" class="dropdown-toggle"
                                style={pathname.match('/dashboard') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        <span>Dashboard</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/Enquiry" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/Enquiry') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>Enquiry</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/AddPackage" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/AddPackage') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>Add Package</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/AddMembership" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/AddMembership') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>Membership</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/CreateBill" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/CreateBill') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>CreateBill</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/Reports" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/Reports') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>Reports</span>
                                    </div>
                                </Link>
                            </li>

                            <li class="menu">
                                <Link to="/Setting" aria-expanded="false" class="dropdown-toggle" 
                                style={pathname.match('/Setting') ? activeLink : {}} 
                                >
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                        <span>Setting</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                     </nav>  
                </div>
            </div>
            
        </div>
    )
}
