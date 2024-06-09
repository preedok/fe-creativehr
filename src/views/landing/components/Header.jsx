import React from 'react'
import icon1 from '../../../assets/icon1.gif'

const Header = () => {
    return (
        <>
            <header className={`w-full h-[86vh] flex justify-center items-center px-4 py-2 transition duration-300`}>
                <div className="flex flex-grow justify-center ">
                    <div className="text-left mt-[-80px] " style={{ lineHeight: '1.2' }}>
                        <h5 className={`fw-bold mt-5 ms-2`} style={{ fontSize: '50px', fontFamily: 'sans-serif' }} >
                            <span style={{ color: '#B5C18E' }}>Creativehr <br /> <b style={{ color: '#feba5b' }}>Empowering growth through innovative training solutions</b> </span>
                        </h5>
                        <p className={`ms-2 mt-2 fw-bold`} style={{ fontSize: '16px', color: '#496989' }}>Join a journey of learning, consulting & transformative programming [B2B | B2G | B2C] !</p>
                    </div>
                </div>
                <div className="flex flex-grow justify-center">
                    <div className="text-right mt-14">
                        <img
                            style={{ marginBottom: "55px", borderRadius: "35px", width: '1300px', height: '530px' }}
                            src={icon1}
                            alt="hero"
                        />
                    </div>
                </div>
            </header>
            <section >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center w-full">
                        <div className="flex gap-2 items-center  rounded-lg p-4 ">
                            <p className="text-center mt-2 font-bold text-[#496989]">Users</p>
                            <p className="text-center text-4xl mt-1 font-bold text-[#feba5b]">999+</p>
                        </div>
                        <div className="flex gap-2 items-center  rounded-lg p-4 ">
                            <p className="text-center mt-2 font-bold text-[#496989]">Training</p>
                            <p className="text-center text-4xl mt-1 font-bold text-[#feba5b]">24</p>
                        </div>
                        <div className="flex gap-2 items-center  rounded-lg p-4">
                            <p className="text-center mt-2 font-bold text-[#496989]">Module</p>
                            <p className="text-center text-4xl mt-1 font-bold text-[#feba5b]">4530+</p>
                        </div>
                        <div className="flex gap-2 items-center  rounded-lg p-4 ">
                            <p className="text-center mt-2 font-bold text-[#496989]">Testimoni</p>
                            <p className="text-center text-4xl mt-1 font-bold text-[#feba5b]">1200+</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
