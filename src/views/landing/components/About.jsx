import React, {useEffect} from 'react'
import { FaRegLightbulb, FaRegSmile, FaRegThumbsUp, FaRegHeart, FaCheckCircle } from 'react-icons/fa';
import icon2 from '../../../assets/icon2.gif'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    };

    const cardData = [
        { icon: <FaRegLightbulb />, title: "Innovation", subtitle: "First card text", link: "#innovation" },
        { icon: <FaRegSmile />, title: "Happiness", subtitle: "Second card text", link: "#happiness" },
        { icon: <FaRegThumbsUp />, title: "Quality", subtitle: "Third card text", link: "#quality" },
        { icon: <FaRegHeart />, title: "Passion", subtitle: "Fourth card text", link: "#passion" },
        { icon: <FaRegLightbulb />, title: "Creativity", subtitle: "Fifth card text", link: "#creativity" },
        { icon: <FaRegSmile />, title: "Joy", subtitle: "Sixth card text", link: "#joy" },
        { icon: <FaRegThumbsUp />, title: "Excellence", subtitle: "Seventh card text", link: "#excellence" },
        { icon: <FaRegHeart />, title: "Love", subtitle: "Eighth card text", link: "#love" }
    ];
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section className="w-full py-16 bg-transparent flex flex-col items-center">
                <div className="max-w-7xl mx-auto text-center px-4">
                    <h2 data-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-4xl font-bold text-[#8b9679] mb-4">About Us</h2>
                    <p data-aos="zoom-in-right"
                        data-aos-duration="1000" className="text-lg text-[#496989] mb-8">
                        At Creativehr, we are dedicated to fostering growth and development through innovative training solutions.
                        Our mission is to provide top-notch learning experiences, consulting services, and transformative programming
                        for businesses, governments, and individuals. Join us on a journey of continuous improvement and success.
                    </p>
                </div>
                <div className="w-full max-w-7xl mx-auto px-4">
                    <Slider {...settings}>
                        {cardData.map((card, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white bg-opacity-70 shadow-lg rounded-[20px] p-8 m-4 flex flex-col items-center">
                                    <div data-aos="zoom-in-right"
                                        data-aos-duration="1000" className="text-5xl text-gray-800 mb-4">{card.icon}</div>
                                    <h3 data-aos="zoom-in-left"
                                        data-aos-duration="1000" className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                                    <p data-aos="zoom-in-right"
                                        data-aos-duration="1000" className="text-gray-600 mb-4">{card.subtitle}</p>
                                    <a data-aos="zoom-in-left"
                                        data-aos-duration="1000" style={{fontSize:'13px', fontWeight:'700'}} href={card.link} className="mt-4 px-4 py-2 rounded-full bg-[#feba5b] hover:bg-blue-600 text-white">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="py-5">
                <div className="container mx-auto px-4 flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <img
                            data-aos="zoom-in-right"
                            data-aos-duration="1000"
                            src={icon2} 
                            alt="creativehr"
                            className="rounded-[20px] shadow-lg mb-5 m-auto"
                            style={{ width: '90%', height: 'auto' }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 data-aos="zoom-in-left"
                            data-aos-duration="1000" className="text-3xl font-bold text-center text-[#b5bea5] mb-6">Advantages of Training at Creativehr</h2>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle className="text-[#feba5b] text-2xl mr-4" data-aos="zoom-in-right"
                                data-aos-duration="1000" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Custom Training</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Tailored sessions for your company's specific needs, ensuring optimal effectiveness.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Experienced Instructors</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Receive guidance from industry experts with practical experience and deep knowledge.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Practical Approach</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Focus on practical application with real case studies and simulations for deeper learning.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Ongoing Support</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">We provide ongoing support post-training to ensure successful implementation in the field.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs

