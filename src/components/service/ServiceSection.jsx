import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../../../public/db/serviceDataThree.json'


export default function ServiceSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <section className="services-two padding">
            <div
                className="services-two__bg"
                style={{
                    backgroundImage: "url(/img/background/services-v2-bg.jpg)",
                }}
            ></div>
            <div className="shape1">
                <img src="/img/shape/services-v2-shape1.png" alt="Decorative Shape" />
            </div>
            <div className="container">
                <div className="sec-title-two">
                    <div className="sub-title">
                        <h5>Our Services</h5>
                    </div>
                    <h2>
                        We Provide all Kinds of <br className="d-block d-lg-none" /> Logistics Service
                    </h2>
                </div>
                <Swiper
                    className="services-two__slider"
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={{
                        nextEl: "#services-two__swiper-button-prev",
                        prevEl: "#services-two__swiper-button-next",
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2000,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="services-two__single">
                                <div className="services-two__single-img">
                                    <div className="inner">
                                        <img  style={{height:"220px"}} src={item.image} alt={item.title} />
                                    </div>
                                    <div className="number-box">{item.number}</div>
                                </div>
                                <div className="services-two__single-content">
                                    <div className="services-two__single-content-inner">
                                        <h3>
                                            <a href={item.link}>{item.title}</a>
                                        </h3>
                                        <p>{item.text}</p>
                                        <div className="count-box">{item.number}</div>
                                    </div>
                                    <div className="btn-box">
                                        <a className="thm-btn" href={item.link}>
                                            <span className="txt">Read More</span>
                                            <i className="icon-right-arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="services-two__wrap">
                    <div className="swiper-counter">
                        <div id="current2">{currentSlide + 1}</div> {/* Display current slide index */}
                        <div id="total2">{data?.length}</div>
                    </div>
                </div>
                <div className="swiper-nav-style1">
                    <div
                        className="swiper-button-prev"
                        id="services-two__swiper-button-next"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="icon-left-arrow-5" aria-hidden="true"></i>
                    </div>
                    <div
                        className="swiper-button-next"
                        id="services-two__swiper-button-prev"
                        style={{ marginLeft: '25px' }}
                    >
                        <i className="icon-right-arrow-5" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
