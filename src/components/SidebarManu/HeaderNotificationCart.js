import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './SidebarManu.scss';
import { Link } from 'react-router-dom';

import { IoClose } from "react-icons/io5";

import creator1 from '../../img/creator5.png';
import creator2 from '../../img/creator6.png';
import creator3 from '../../img/creator3.png';
import creator4 from '../../img/creator7.png';
import image from '../../img/img.jpg';
import chairImage from '../../img/cart-img.jpg'

function ControlledTabsExample() {
    const [key, setKey] = useState('all');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="all" title="All(3)">
                <div class="user_message"> 
                    <div class="cart_dropdown_otr">
                        <ul class="cart_dropdown_ul">
                            <li class="cart_dropdown_li">
                                <div class="media">
                                    <div class="img_otr">
                                        <img class="img" src={image} alt="" />
                                    </div>
                                    <div class="media_body">
                                        <Link class="heading heading-sm">Men Blue T-Shirt</Link>
                                        <div class="qty_box"> 
                                            <div class="input_group">
                                                <span class="input_group_prepend">
                                                    <button class="btn quantity-left-minus" type="button" data-type="minus" data-field="">- </button>
                                                </span>
                                                <input class="form-control input-number" type="text" name="quantity" value="1" />
                                                <span class="input_group_prepend">
                                                    <button class="btn quantity-right-plus" type="button" data-type="plus" data-field="">+</button>
                                                </span>
                                            </div>
                                        </div>
                                        <h6 class="price_text">$695.00</h6>
                                    </div>
                                    <div class="close_circle_otr">
                                        <div class="close_circle_inr">
                                            <IoClose size={18} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul class="messages_ul"> 
                        <li class="messages_li">
                            <div class="user_alerts">
                                <Link class="img_otr" href="#">
                                    <img class="img" src={creator1} alt="user" />
                                </Link>
                                <div class="content_otr">
                                    <div class="content">
                                        <Link class="heading heading-sm">Floyd Miles</Link>
                                        <p class="text heading-xsm">Sir, Can i remove part in des...</p>
                                    </div>
                                    <div class="icon_otr"> 
                                        <i class="icon ri-more-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="messages_li">
                            <div class="user_alerts">
                                <Link class="img_otr" href="#">
                                    <img class="img" src={creator2} alt="user" />
                                </Link>
                                <div class="content_otr">
                                    <div class="content">
                                        <Link class="heading heading-sm">Dianne Russell</Link>
                                        <p class="text heading-xsm">So, what is my next work ?</p>
                                    </div>
                                    <div class="icon_otr"> 
                                        <i class="icon ri-more-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="message" title="Messages">
                <div class="notification_card"> 
                    <ul class="notification_card_ul"> 
                        <li class="notification_card_li">
                            <div class="notification_card_div">
                                <div class="img_otr">
                                    <img class="img" src={creator3} alt="user" />
                                </div>
                                <div class="content">
                                    <Link class="heading heading-xsm" to='/'>Robert D. Hambly</Link>
                                    <p class="text heading-xsm">Hello Miss...😊</p>
                                </div>
                                <p class="time_text heading-xsm">44 sec</p>
                            </div>
                        </li>
                        <li class="notification_card_li">
                            <div class="notification_card_div">
                                <div class="img_otr">
                                    <img class="img" src={creator4} alt="user" />
                                </div>
                                <div class="content">
                                    <Link class="heading heading-xsm" to='/'>Courtney C. Strang</Link>
                                    <p class="text heading-xsm">Wishing You a Happy Birthday Dear.. 🥳🎊</p>
                                </div>
                                <p class="time_text heading-xsm">3 min</p>
                            </div>
                        </li>
                        <li class="notification_card_li">
                            <div class="notification_card_div">
                                <div class="img_otr">
                                    <img class="img" src={creator2} alt="user" />
                                </div>
                                <div class="content">
                                    <Link class="heading heading-xsm" to='/'>Raye T. Sipes</Link>
                                    <p class="text heading-xsm">Hello Dear!! This Theme Is Very beautiful</p>
                                </div>
                                <p class="time_text heading-xsm">48 min</p>
                            </div>
                        </li>
                        <li class="notification_card_li">
                            <div class="notification_card_div">
                                <div class="img_otr">
                                    <img class="img" src={creator1} alt="user" />
                                </div>
                                <div class="content">
                                    <Link class="heading heading-xsm" to='/'>Henry S. Miller</Link>
                                    <p class="text heading-xsm">You're older today than yesterday, happy birthday!</p>
                                </div>
                                <p class="time_text heading-xsm">52 min</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="cart" title="Cart">
                <div class="cart_dropdown_otr"> 
                    <ul class="cart_dropdown_ul">
                        <li class="cart_dropdown_li">
                            <div class="media">
                                <div class="img_otr">
                                    <img class="img" src={chairImage} alt="" />
                                </div>
                                <div class="media_body">
                                    <Link class="heading heading-sm">Furniture Chair for Home</Link>
                                    <div class="qty_box"> 
                                        <div class="input_group">
                                            <span class="input_group_prepend">
                                                <button class="btn quantity-left-minus" type="button" data-type="minus" data-field="">- </button>
                                            </span>
                                            <input class="form-control input-number" type="text" name="quantity" value="1" />
                                            <span class="input_group_prepend">
                                                <button class="btn quantity-right-plus" type="button" data-type="plus" data-field="">+</button>
                                            </span>
                                        </div>
                                    </div>
                                    <h6 class="price_text">$500</h6>
                                </div>
                                <div class="close_circle_otr">
                                    <div class="close_circle_inr">
                                        <IoClose size={18} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cart_dropdown_li">
                            <div class="media">
                                <div class="img_otr">
                                    <img class="img" src={image} alt="" />
                                </div>
                                <div class="media_body">
                                    <Link class="heading heading-sm">Men Cotton Blend Blue T-Shirt</Link>
                                    <div class="qty_box"> 
                                        <div class="input_group">
                                            <span class="input_group_prepend">
                                                <button class="btn quantity-left-minus" type="button" data-type="minus" data-field="">- </button>
                                            </span>
                                            <input class="form-control input-number" type="text" name="quantity" value="1" />
                                            <span class="input_group_prepend">
                                                <button class="btn quantity-right-plus" type="button" data-type="plus" data-field="">+</button>
                                            </span>
                                        </div>
                                    </div>
                                    <h6 class="price_text">$695.00</h6>
                                </div>
                                <div class="close_circle_otr">
                                    <div class="close_circle_inr">
                                        <IoClose size={18} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="total_main">
                            <p class="total_text heading-xsm">Order Total :</p>
                            <p class="total_price heading-sb">$1195.00</p>
                        </li>
                    </ul>
                </div>
            </Tab>
        </Tabs>
    );
}

export default ControlledTabsExample;
