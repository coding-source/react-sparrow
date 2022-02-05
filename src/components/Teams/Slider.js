import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team1 from '../../images/Team1.jpg'
import Teams2 from '../../images/Teams2.jpg'
import Team3 from '../../images/Team3.jpg'
import Team4 from '../../images/Team4.jpg'
import Team5 from '../../images/Team5.jpg'
import Team6 from '../../images/Team6.jpg'

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Team1} alt="Person1" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                       <h2>Leena Founder&Ceo <span className="job-title">Web Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Teams2} alt="Person2" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Lalith Prem <span className="job-title">Mentor/AI Engineer</span></h2>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Team3}  alt="Person3"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Kishore <span className="job-title">Mentor/Cyber Security Analyst</span></h2>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Team4} alt="Person4" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>NithyaShree <span className="job-title">Instagram Handler</span></h2>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Team5} alt="Person5" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Sri priya <span className="job-title">Instagram Handler</span></h2>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="box">
                    <div className="box-image">
                        <img src={Team6} alt="Person6"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Surya Prakash <span className="job-title">ReactJS Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider
