import React, { useEffect } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { FaCheckCircle } from 'react-icons/fa'; 
import icon2 from '../../../assets/icon2.gif'
import ReactPlayer from 'react-player';
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
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }
        ]
    };

    const cardData = [
        {
            icon: <LocalLibraryIcon fontSize="large" />, title: "Regular Training", subtitle: "Pelatihan secara rutin untuk pengembangan keterampilan.", videoUrl: "https://youtu.be/8X2ohD8LvuM?si=UyOYPc0ZFpqHsL1R"
        },
        { icon: <ApartmentIcon fontSize="large" />, title: "In House Training", subtitle: "Pelatihan yang diselenggarakan di dalam perusahaan atau organisasi.", videoUrl: "https://youtu.be/7Prm9D80yfg?si=BsUJaW_bHSGbCc9K" },
        { icon: <OndemandVideoIcon fontSize="large" />, title: "Video Training", subtitle: "Pelatihan yang dapat diakses melalui video untuk kemudahan akses.", videoUrl: "https://youtu.be/x216BSqkoTw?si=5-_oc6HOEOMqbfRN" },
        { icon: <CastForEducationIcon fontSize="large" />, title: "Webinar", subtitle: "Sesi pelatihan online dengan pemateri ahli di bidangnya.", videoUrl: "https://youtu.be/J0Dc3FFEXdM?si=pABLXEKOxT6CFUUx" },
    ];

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section id='about' className="w-full py-16 bg-transparent flex flex-col items-center">
                <div className="max-w-7xl mx-auto text-center px-4">
                    <h2 data-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-4xl font-bold text-[#8b9679] mb-4">Tentang Kami</h2>
                    <p data-aos="zoom-in-right"
                        data-aos-duration="1000" className="text-lg text-[#496989] mb-8">
                        Di Creativehr, kami berdedikasi untuk mendorong pertumbuhan dan pengembangan melalui solusi pelatihan yang inovatif. Misi kami adalah menyediakan pengalaman belajar terbaik, layanan konsultasi, dan program transformasi untuk bisnis, pemerintah, dan individu. Bergabunglah dengan kami dalam perjalanan peningkatan dan kesuksesan yang berkelanjutan.
                    </p>
                </div>
                <div className="w-full max-w-7xl mx-auto rounded-[20px]">
                    <Slider {...settings}>
                        {cardData.map((card, index) => (
                            <div key={index} className="p-4 relative">
                                <div className="bg-white bg-opacity-70 shadow-lg  p-8 m-4 flex flex-col items-center relative">
                                    {/* React Player untuk video latar belakang */}
                                    <ReactPlayer
                                        url={card.videoUrl}
                                        playing={true}
                                        loop={true}
                                        muted={true}
                                        width="100%"
                                        height="100%"
                                        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                                        className="rounded-[25px]"
                                    />
                                    {/* Konten teks dan ikon di atas video */}
                                    <div className="z-10 relative text-center">
                                        <div className="text-5xl text-gray-800 mb-4">{card.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                                        <p className="text-gray-600 mb-4">{card.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* <div className="w-full max-w-7xl mx-auto px-4">
                    <Slider {...settings}>
                        {cardData.map((card, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white bg-opacity-70 shadow-lg rounded-[20px] p-8 m-4 flex flex-col items-center">
                                    <div data-aos="zoom-in-right"
                                        data-aos-duration="1000" className="text-5xl text-gray-800 mb-4">{card.icon}</div>
                                    <h3 data-aos="zoom-in-left"
                                        data-aos-duration="1000" className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                                    <p data-aos="zoom-in-right"
                                        data-aos-duration="1000" className="text-gray-600 mb-4 text-center">{card.subtitle}</p>
                                    <a data-aos="zoom-in-left"
                                        data-aos-duration="1000" style={{ fontSize: '13px', fontWeight: '700' }} href={card.link} className="mt-4 px-4 py-2 rounded-full bg-[#feba5b] hover:bg-blue-600 text-white">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>  */}
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
                            data-aos-duration="1000" className="text-3xl font-bold text-center text-[#b5bea5] mb-6">Keunggulan Pelatihan di Creativehr</h2>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle className="text-[#feba5b] text-2xl mr-4" data-aos="zoom-in-right"
                                data-aos-duration="1000" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Pelatihan Khusus</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Sesi yang disesuaikan dengan kebutuhan spesifik perusahaan Anda, memastikan efektivitas optimal.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Instruktur Berpengalaman</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Dapatkan bimbingan dari para ahli industri dengan pengalaman praktis dan pengetahuan mendalam.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Pendekatan Praktis</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Fokus pada aplikasi praktis dengan studi kasus nyata dan simulasi untuk pembelajaran yang lebih mendalam.</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCheckCircle data-aos="zoom-in-right"
                                data-aos-duration="1000" className="text-[#feba5b] text-2xl mr-4" />
                            <div>
                                <h3 data-aos="zoom-in-left"
                                    data-aos-duration="1000" className="text-2xl font-semibold text-[#feba5b]">Dukungan Berkelanjutan</h3>
                                <p data-aos="zoom-in-right"
                                    data-aos-duration="1000" className="text-[#496989]">Kami menyediakan dukungan berkelanjutan setelah pelatihan untuk memastikan implementasi yang sukses di lapangan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs

