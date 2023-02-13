import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>get in <span>touch</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    {/* <div className="col-lg-3 col-md-5">
                        <div className="contact-info">
                            <h3>For Any Queries and support</h3>
                            <div className="contact-info-item">
                                <i className="fas fa-location-arrow">
                                    <h3>Company Location</h3>
                                    <p>199 xyz gali, New Delhi</p>
                                </i>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-envelope">
                                    <h3>Write to us at</h3>
                                    <p>info@gmail.com</p>
                                </i>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-">
                                    <h3>Call us on</h3>
                                    <p>+91 9679 2913 ** </p>
                                </i>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-8 col-md-7 ">
                        <div className="contact-form">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Name' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Email' className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Phone' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea type="Your Message" placeholder='Subject' class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="Submit" class="btn btn-2">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact