import React from "react";
import{
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa"; 
import { BsTwitter, } from "react-icons/bs";
import { AiFillInstagram, } from "react-icons/ai"
import "./Newsletter.scss";
const Newsletter = () => {
    return  (
    <div className="newsletter-section">
        <div className="newsletter-content">
            <div className="small-text">Newsletter </div>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email address" />
                <button>Subscribe</button>
            </div>
            <div className="text"> Will be used in accordance with our Privacy Policy </div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <BsTwitter size={14}/>
                </div>
                <div className="icon instagram">
                    <AiFillInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Newsletter;
