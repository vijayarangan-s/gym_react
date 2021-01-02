import React, { useEffect, useState } from 'react'
import './theme.css';
import { Link, Redirect } from 'react-router-dom';

const Header = (props) => {

    let pathname = window.location.pathname;
    const [isToggle, setIsToggle] = useState(true)
    // useEffect(() => {
    //     pathname = window.location.pathname;
    // }, [window.location.pathname]);

    const handleClick = (e) => {
        localStorage.removeItem("token");
        return <Redirect to="/Login" />
    }
    
    useEffect(() => {
        if(isToggle){
            document.querySelector('.sidebar').classList.add('open')
        } else {
            console.log("after...",isToggle)
            document.querySelector('.sidebar').classList.remove('open')
        }
        
    }, [isToggle])

    const handleToggle = (e) => {
        e.preventDefault();
        setIsToggle(!isToggle)
    }

    const activeLink = {
        background: `rgba(96, 125, 139, 0.54)`,
        boxShadow: `0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)`,
        bordeRadius: `6px`,
        color: `#fafafa`
    }

    return (
        <div>

            <div class="header-container fixed-top">
                <header class="header navbar navbar-expand-sm">
                    <ul class="navbar-item theme-brand flex-row  text-center">
                        <li class="nav-item theme-logo">
                            <a href="index-2.html">
                                <img src="assets/img/logo.svg" class="navbar-logo" alt="logo" />
                            </a>
                        </li>
                        <li class="nav-item theme-text">
                            <a href="index-2.html" class="nav-link"> CORK </a>
                        </li>
                    </ul>

                    <ul class="navbar-item flex-row ml-md-0 ml-auto">
                        <li class="nav-item align-self-center search-animated">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <form class="form-inline search-full form-inline search" role="search">
                                <div class="search-bar">
                                    <input type="text" class="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
                                </div>
                            </form>
                        </li>
                    </ul>

                    <ul class="navbar-item flex-row ml-md-auto">

                        <li class="nav-item dropdown language-dropdown">
                            
                        <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="language-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/img/ca.png" class="flag-width" alt="flag"/>
                        </a>
                        <div class="dropdown-menu position-absolute" aria-labelledby="language-dropdown">
                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                <img src="assets/img/de.png"
                                    class="flag-width" alt="flag" /> 
                                    <span class="align-self-center">&nbsp;German</span>
                            </a>
                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                <img src="assets/img/jp.png"
                                    class="flag-width" alt="flag" /> 
                                    <span class="align-self-center">&nbsp;Japanese</span>
                            </a>
                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                <img src="assets/img/fr.png"
                                    class="flag-width" alt="flag" /> 
                                    <span class="align-self-center">&nbsp;French</span>
                            </a>
                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                <img src="assets/img/ca.png"
                                class="flag-width" alt="flag" /> 
                                <span class="align-self-center">&nbsp;English</span>
                            </a>
                    </div>
                        </li>

                        <li class="nav-item dropdown message-dropdown">
                            <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="messageDropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>

                            <div class="dropdown-menu p-0 position-absolute" aria-labelledby="messageDropdown">
                                <div class="">
                                    <a class="dropdown-item">
                                        <div class="">

                                            <div class="media">
                                                <div class="user-img">
                                                    <img class="usr-img rounded-circle" src="assets/img/profile-11.jpg" alt="profile" />
                                                </div>
                                                <div class="media-body">
                                                    <div class="">
                                                        <h5 class="usr-name">Kara Young</h5>
                                                        <p class="msg-title">ACCOUNT UPDATE</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="">

                                            <div class="media">
                                                <div class="user-img">
                                                    <img class="usr-img rounded-circle" src="assets/img/profile-16.jpg" alt="profile" />
                                                </div>
                                                <div class="media-body">
                                                    <div class="">
                                                        <h5 class="usr-name">Daisy Anderson</h5>
                                                        <p class="msg-title">ACCOUNT UPDATE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="">

                                            <div class="media">
                                                <div class="user-img">
                                                    <img class="usr-img rounded-circle" src="assets/img/profile-34.jpg" alt="profile" />
                                                </div>
                                                <div class="media-body">
                                                    <div class="">
                                                        <h5 class="usr-name">Oscar Garner</h5>
                                                        <p class="msg-title">ACCOUNT UPDATE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown notification-dropdown">
                            <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span class="badge badge-success"></span>
                            </a>
                            <div class="dropdown-menu position-absolute"        aria-labelledby="notificationDropdown">
                                <div class="notification-scroll">

                                    <div class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            <div class="media-body">
                                                <div class="notification-para"><span class="user-name">Shaun Park</span> likes your photo.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                            <div class="media-body">
                                                <div class="notification-para"><span class="user-name">Kelly Young</span> shared your post</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
                                            <div class="media-body">
                                                <div class="notification-para"><span class="user-name">Kelly Young</span> mentioned you in comment.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown user-profile-dropdown">
                            <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="userProfileDropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="assets/img/profile-16.jpg" alt="avatar" />
                            </a>
                            <div class="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                                <div class="">
                                    <div class="dropdown-item">
                                        <a href="user_profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> My Profile</a>
                                    </div>
                                    <div class="dropdown-item">
                                        <a href="apps_mailbox.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> Inbox</a>
                                    </div>
                                    <div class="dropdown-item">
                                        <a href="auth_lockscreen.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Lock Screen</a>
                                    </div>
                                    <div class="dropdown-item">
                                        <Link to="/Login" onClick={e => handleClick(e)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                             Sign Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </header>
            </div>

            <div class="sub-header-container">
                <header class="header navbar navbar-expand-sm">
                    <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"
                        onClick={handleToggle}
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </a>

                    <ul class="navbar-nav flex-row">
                        <li>
                            <div class="page-header">

                                <nav class="breadcrumb-one" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">{props.name}</a></li>
                                    </ol>
                                </nav>

                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav flex-row ml-auto ">
                        <li class="nav-item more-dropdown">
                            <div class="dropdown  custom-dropdown-icon">
                                <a class="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Settings</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">
                                    <a class="dropdown-item" data-value="Settings" href="javascript:void(0);">Settings</a>
                                    <a class="dropdown-item" data-value="Mail" href="javascript:void(0);">Mail</a>
                                    <a class="dropdown-item" data-value="Print" href="javascript:void(0);">Print</a>
                                    <a class="dropdown-item" data-value="Download" href="javascript:void(0);">Download</a>
                                    <a class="dropdown-item" data-value="Share" href="javascript:void(0);">Share</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </header>
            </div>

            <div class="main-container" id="container">
                <div class="overlay"></div>
                <div class="search-overlay"></div>

                {/* <!--  BEGIN SIDEBAR  --> */}
                <div class="sidebar-wrapper sidebar-theme" >
                     <nav id="sidebar" className="sidebar">
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

export default Header;
