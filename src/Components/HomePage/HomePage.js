import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Homepage.css'
import girlOne from './img/girlOne.jpg'
import Review from './Review'

const HomePage = ({ products }) => {
    const [reviews, setReviews] = useState([
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
        {
            name: 'John McDame',
            descripton: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, temporibus.',
            date: '11th January 2022',
            img: girlOne
        },
    ])
    
    

    return (
        <div className='homepage'>
            <div className="heroSection">
                <div className="heroSectionContent">
                    <h1 className='welcomeTitle'>We are Stoners House </h1>
                    <p className='welcomeText'>Everything is about Freedom, and that is exactly what we are giving you. our solutions are designed to be fully scalable. They scale seamlessly as your business grows.</p>
                    <Link to='/products'><button className='welcomeBtn'>Get involved</button></Link>
                </div>
            </div>
            <section className="whatWeDo container">
                <div className="homeTitle">What We Do</div>
                <p className="homeText">We are a goverment certified weapons firm that purchase and sells home level military equipments for defence. We are a holding company which is built around several weopons and devices used by the united states citizens</p>
            </section>
            <section className="whyChooseUs container">
                <div className="homeTitle">why choose us</div>
                <p className="homeText">Our team of professionnals and business specialists, the perfect recipe for success and collaboration.</p>
                <p className="homeText">We also promote human rights and equality</p>
            </section>


            <section className="ourCustomerSatisfaction container">
                <div className="homeTitle centerText">Our customer satisfaction</div>
                <div className="reviews">
                    {
                        reviews.map((review, index) =>(
                            <Review key={index} review={review} />
                        ))
                    }
                </div>
            </section>
            <section className="whyTrustUs">
                <div className="homeTitle">Our amazing features</div>
                <div className="ourFeaturesGrid">
                    <div className="feature">
                        <div className="featuresSgWrapper">

                        </div>
                        <p className="featureText">quality products</p>
                    </div>
                    <div className="feature">
                        <div className="featuresSgWrapper">

                        </div>
                        <p className="featureText">100% refund</p>
                    </div>
                    <div className="feature">
                        <div className="featuresSgWrapper">

                        </div>
                        <p className="featureText">24/7 support</p>
                    </div>
                    <div className="feature">
                        <div className="featuresSgWrapper">

                        </div>
                        <p className="featureText">affordable</p>
                    </div>

                </div>
            </section>

            <section className="whyTrustUs">
                <div className="homeTitle">Why trust us</div>
                <p className="homeText">We are certified to sell weapons commercially in the united states of America</p>
                <p className="homeText">We have been commissioned to sell to the following towns</p>
            </section>

            <section className="disclaimer">
                <div className="homeTitle">Disclaimer</div>
                <div>
                    <p className="homeText">
                        **Please note that our weapons are used for protection and self defends and protection and not 
                        for attacks
                    </p>
                    <p className="homeText">We will not support any killings with these items and will directly deny the any actions performs against it which are not for self defense**</p>

                </div>
            </section>
            <section className="homePage_finalLink">
                <Link className='homepage_getProduct' to='/products'>get products</Link>
            </section>
        </div>
    )
}

export default HomePage
