import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className=" text-[#496989] p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: About the company */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">About Us</h5>
                    <p className="text-sm">
                        We are committed to delivering exceptional service and innovative solutions. Our mission is to empower our clients and help them achieve their goals.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
                    <ul className="text-sm space-y-2">
                        <li><a href="/home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="/product" className="hover:text-gray-300">Products</a></li>
                        <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Information */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">Contact Us</h5>
                    <ul className="text-sm space-y-2">
                        <li>Jl AD PREMIER LANTAI 17 SUITE 04 B, JL. TB. SIMATUPANG NO. 5 RT/RW.005/007 Kelurahan RAGUNAN, Kecamatan PASAR MINGGU, JAKARTA SELATAN , DKI JAKARTA 12550</li>
                        <li>Email: creativehr@gmail.com</li>
                        <li>Phone: +62 852 1969 2828</li>
                    </ul>
                </div>

                {/* Column 4: Social Media Links */}
                <div>
                    <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-300">
                            <FacebookIcon />
                        </a>
                        <a href="https://twitter.com" className="hover:text-gray-300">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.instagram.com/creativerhr/" className="hover:text-gray-300">
                            <InstagramIcon />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-gray-300">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copywrite Section */}
            <div className="text-center pt-8 border-t border-gray-800 mt-8">
                <p className="text-sm text-[#9CAFAA]">
                    &copy; {new Date().getFullYear()} PT CREATIVE AND TRAINING DEVELOPMENT. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

