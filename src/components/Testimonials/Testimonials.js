import React from 'react'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'
const Testimonials = () => {
    return (
        <div className="testimonials section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>What Our  <span> User's</span> Say</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="testimonials-carasouel">
                        <TestimonialCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials