import React, { Fragment, useState } from 'react'
import { sidebarMenu } from '../../Data'
import { Link } from 'react-router-dom'
import HeaderNotificationCart from './HeaderNotificationCart';

import ThemeBtn from '../ThemeBtn/ThemeBtn';


import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { PiStarBold } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

import './SidebarManu.scss';

import brandLogo from '../../img/brand-logo.png';
import handGif from '../../img/hand.gif';
import creatorImage from '../../img/creator.png';

const SidebarManu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const showSidebarMenu = () => setIsOpen(!isOpen);
    const closeSidebarMenu = () => setIsOpen(false);

    return (
        <Fragment>
            <div className={`sidebar_main ${isOpen && "showSidebar"}`}>
                <div className='sidebar_container'>
                    <div className="logo_main">
                        <Link className="logo_otr" to='/'>
                            <img className="logo" src={brandLogo} alt="Brand LOGO" />
                        </Link>
                        <div className="icon_otr">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid status_toggle middle sidebar-toggle">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <div className="close_menu_icon_otr" onClick={closeSidebarMenu}>
                            <MdArrowBackIos size={24} />
                        </div>
                    </div>
                    <ul className="sidebar_menu_ul">
                        {sidebarMenu.map((item) => (
                            <li className='sidebar_menu_li' key={item.id}>
                                <p className="sidebar_menu_title heading-sb">{item.title}</p>
                                <ul className='menu_link_ul'>
                                    {item.listItems.map((listItem) => (
                                        <li className='menu_link_li' key={listItem.id}>
                                            <Link to='/' className='menu_linkk'>
                                                {listItem.icon}
                                                <span className='text heading-sm'>{listItem.title}</span>
                                                <div className='pin_icon_otr'>{listItem.pinIcon}</div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <header className='header'>
                <div className="header_container">
                    <div className="header_wrapper">
                        <div className="header_content">
                            <div className={`toggle_sidebar ${isOpen && "showSidebar"}`} onClick={showSidebarMenu}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center status_toggle middle sidebar-toggle">
                                    <line x1="18" y1="10" x2="6" y2="10"></line>
                                    <line x1="21" y1="6" x2="3" y2="6"></line>
                                    <line x1="21" y1="14" x2="3" y2="14"></line>
                                    <line x1="18" y1="18" x2="6" y2="18"></line>
                                </svg>
                            </div>
                            <div className="heading_otr">
                                <h4 className="heading heading-h4">Welcome Alex</h4>
                                <div className="hand_icon_otr">
                                    <img className="hand_icon" src={handGif} alt="Hand Gift" />
                                </div>
                            </div>
                            <p className="desc heading-s">Here's what's happening with your store today.</p>
                        </div>
                        <div className="nav_right">
                            <ul className="nav_menu_ul"> 
                                <li className="nav_menu_li"> 
                                    <form className="form">
                                        <div className="search_icon_otr">
                                            <CiSearch size={24} />
                                        </div>
                                        <div className="input_otr">
                                            <input className="input" type="search" name="search" id="search" placeholder="Search" />
                                        </div>
                                    </form>
                                </li>
                                <li className="nav_menu_li">
                                    <div className="star_dropdown_otr">
                                        <div className="star_icon_otr">
                                            <PiStarBold size={24} />
                                        </div>
                                        <div className='star_dropdown_card'>
                                            <div className='card_header'>
                                                <h4 className="heading heading-h4">bookmarks</h4>
                                            </div>
                                            <div className='card_body'>
                                                <ul className='star_list'>
                                                    <li className='star_item'>
                                                        <Link className='star_linkk' to='/'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                                        </Link>
                                                        <p className='text heading-xsb'>Forms</p>
                                                    </li>
                                                    <li className='star_item'>
                                                        <Link className='star_linkk' to='/'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        </Link>
                                                        <p className='text heading-xsb'>Profile</p>
                                                    </li>
                                                    <li className='star_item'>
                                                        <Link className='star_linkk' to='/'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                                                        </Link>
                                                        <p className='text heading-xsb'>Tables</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='card_footer'>
                                                <p className='text heading-sb'>Add New Bookmark</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_menu_li">
                                    <div className="notification_dropdown_otr">
                                        <div className="notification_icon_otr">
                                            <IoIosNotifications size={24} />
                                            <div className="notification_count">
                                                <p className="notification_count_number">4</p>
                                            </div>
                                        </div>
                                        <div className="notification_dropdown"> 
                                            <div className="notification_dropdown_card"> 
                                                <div className="card_header"> 
                                                    <h4 className="heading heading-h4">Notitications</h4>
                                                    <span className="text heading-s">4 New</span>
                                                </div>
                                                <div className='card_body'>
                                                    <HeaderNotificationCart />
                                                </div>
                                                <div className="card_footer"> 
                                                    <div className="action_otr">
                                                        <ThemeBtn 
                                                            ButtonClass='primary_btn'
                                                            ButtonText='Check All'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_menu_li">
                                    <div className="profile_dropdown_otr">
                                        <div className="profile_main">
                                            <div className="profile_otr">
                                                <img className="profile" src={creatorImage} alt="Creator" />
                                            </div>
                                            <div className="profile_content">
                                                <div className="profile_content_heading">
                                                    <p className="heading heading-sm">Alex Mora</p>
                                                    <i className="arrow ri-arrow-down-s-line"></i>
                                                </div>
                                                <p className="text heading-xs">Admin</p>
                                            </div>
                                        </div>
                                        <ul className="profile_dropdown_ul onhover-show-div">
                                            <li className="profile_dropdown_li">
                                                <Link className="profile_dropdown_a" to='/'>
                                                    <FaUser size={18} />
                                                    <span className="profile_dropdown_a_span heading-s">My Profile</span>
                                                </Link>
                                            </li>
                                            <li className="profile_dropdown_li">
                                                <Link className="profile_dropdown_a">
                                                    <IoIosMail size={20} />
                                                    <span className="profile_dropdown_a_span heading-s">Inbox</span>
                                                </Link>
                                            </li>
                                            <li className="profile_dropdown_li">
                                                <Link className="profile_dropdown_a">
                                                    <IoSettings size={20} />
                                                    <span className="profile_dropdown_a_span heading-s">Settings</span>
                                                </Link>
                                            </li>
                                            <div className="action_otr">
                                                <ThemeBtn 
                                                    ButtonClass='logout_btn'
                                                    ButtonText='Log Out'
                                                />
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default SidebarManu
