import React, {useEffect} from 'react'
import icon1 from '../../../assets/icon1.gif'
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <header id='home' className={` flex-col md:flex-row flex container justify-center items-center mx-auto px-4 py-2 `}>
                <div className=" flex flex-grow justify-center md:mt-[-120px]  ">
                    <div className="text-left" style={{ lineHeight: '1.2' }}>
                        <h5 className={`fw-bold mt-5 ms-2`} style={{ fontSize: '50px', fontFamily: 'sans-serif' }} >
                            <span data-aos="fade-up"
                                data-aos-duration="1000" style={{ color: '#B5C18E' }}>Creativehr <br /> <b style={{ color: '#feba5b' }} data-aos="fade-down"
                                    data-aos-duration="1000">Empowering growth through innovative training solutions</b> </span>
                        </h5>
                        <p data-aos="fade-up"
                            data-aos-duration="1000" className={`ms-2 mt-2 fw-bold`} style={{ fontSize: '16px', color: '#496989' }}>Join a journey of learning, consulting & transformative programming [B2B | B2G | B2C] !</p>
                    </div>
                </div>
                <div className="flex flex-grow justify-center">
                    <div className="text-right mt-[10px]">
                        <img
                            style={{  marginBottom: "55px", borderRadius: "35px", width: '1300px', height: '530px' }}
                            src={icon1}
                            alt="hero"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </header>
            <section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center justify-center  rounded-lg p-4">
                            <p data-aos="zoom-in-left" data-aos-duration="1000" className="font-bold text-gray-700 mb-2">User</p>
                            <CountUp start={0} end={999} duration={2.75} prefix="" suffix="+" decimals={0} className="text-4xl font-bold text-yellow-500" />
                        </div>
                        <div className="flex flex-col items-center justify-center  rounded-lg p-4">
                            <p data-aos="zoom-in-left" data-aos-duration="1000" className="font-bold text-gray-700 mb-2">Pelatihan</p>
                            <CountUp start={0} end={24} duration={2.75} prefix="" suffix="" decimals={0} className="text-4xl font-bold text-yellow-500" />
                        </div>
                        <div className="flex flex-col items-center justify-center  rounded-lg p-4">
                            <p data-aos="zoom-in-right" data-aos-duration="1000" className="font-bold text-gray-700 mb-2">Modul</p>
                            <CountUp start={0} end={453} duration={2.75} prefix="" suffix="+" decimals={0} className="text-4xl font-bold text-yellow-500" />
                        </div>
                        <div className="flex flex-col items-center justify-center  rounded-lg p-4">
                            <p data-aos="zoom-in-right" data-aos-duration="1000" className="font-bold text-gray-700 mb-2">Testimoni</p>
                            <CountUp start={0} end={120} duration={2.75} prefix="" suffix="+" decimals={0} className="text-4xl font-bold text-yellow-500" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
