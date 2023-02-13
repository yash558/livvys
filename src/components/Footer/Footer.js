import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>About Us</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, exercitationem!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Condition</a></li>
                                <li><a href="/">latest Blogs</a></li>
                                <li><a href="/">App Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Quicks Links</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Screenshots</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Social Pages</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <p className="copyright-text">
                            &copy;2023 @ The Livvy Company
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer