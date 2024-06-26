import React, { useEffect } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <footer className=" text-[#496989] p-10 md:flex-1 mb-4 md:mb-0 md:ms-[100px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: About the company */}
                <div>
                    <h5 data-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-lg font-semibold mb-3">Tentang kami</h5>
                    <p data-aos="zoom-in-right"
                        data-aos-duration="1000" className="text-sm">
                        Kami berkomitmen untuk memberikan layanan yang luar biasa dan solusi-solusi inovatif. Misi kami adalah memberdayakan klien kami dan membantu mereka mencapai tujuan mereka.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">Tautan Cepat</h5>
                    <ul className="text-sm space-y-2">
                        <li><a data-aos="zoom-in-left"
                            data-aos-duration="1000" href="/home" className="hover:text-gray-300">Home</a></li>
                        <li><a data-aos="zoom-in-right"
                            data-aos-duration="1000" href="/about" className="hover:text-gray-300">Tentang</a></li>
                        <li><a data-aos="zoom-in-left"
                            data-aos-duration="1000" href="/product" className="hover:text-gray-300">Produk</a></li>
                        <li><a data-aos="zoom-in-right"
                            data-aos-duration="1000" href="/blog" className="hover:text-gray-300">Artikel</a></li>
                        <li><a data-aos="zoom-in-left"
                            data-aos-duration="1000" href="/contact" className="hover:text-gray-300">Kontak kami</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Information */}
                <div>
                    <h5 data-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-lg font-semibold mb-3">Alamat kantor</h5>
                    <ul className="text-sm space-y-2">
                        <li data-aos="zoom-in-right"
                            data-aos-duration="1000">Jl AD PREMIER LANTAI 17 SUITE 04 B, JL. TB. SIMATUPANG NO. 5 RT/RW.005/007 Kelurahan RAGUNAN, Kecamatan PASAR MINGGU, JAKARTA SELATAN , DKI JAKARTA 12550</li>
                        <li data-aos="zoom-in-left"
                            data-aos-duration="1000">Email: creativehr@gmail.com</li>
                        <li data-aos="zoom-in-right"
                            data-aos-duration="1000">Phone: +62 852 1969 2828</li>
                    </ul>
                </div>

                {/* Column 4: Social Media Links */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">Follow kami</h5>
                    <div className="flex space-x-4">
                        <a data-aos="zoom-in-left"
                            data-aos-duration="1000" href="https://facebook.com" className="hover:text-gray-300">
                            <FacebookIcon />
                        </a>
                        <a data-aos="zoom-in-right"
                            data-aos-duration="1000" href="https://twitter.com" className="hover:text-gray-300">
                            <TwitterIcon />
                        </a>
                        <a data-aos="zoom-in-left"
                            data-aos-duration="1000" href="https://www.instagram.com/creativerhr/" className="hover:text-gray-300">
                            <InstagramIcon />
                        </a>
                        <a data-aos="zoom-in-right"
                            data-aos-duration="1000" href="https://linkedin.com" className="hover:text-gray-300">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copywrite Section */}
            <div className="text-center pt-8 border-t border-gray-800 mt-8">
                <p  className="text-sm text-[#9CAFAA]">
                    &copy; {new Date().getFullYear()} PT CREATIVE AND TRAINING DEVELOPMENT. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

