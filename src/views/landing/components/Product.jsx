import React, { useEffect } from 'react';
import product from '../../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
    const trainingProducts = [
        {
            id: 1,
            name: "Leadership Essentials",
            image: product,
            description: "Master key leadership skills for professional growth.",
            rating: 4.5,
            price: 199.999,
            discountPrice: 149.999
        },
        {
            id: 2,
            name: "Project Management",
            image: product,
            description: "Efficient techniques to manage projects seamlessly.",
            rating: 5.8,
            price: 299.999,
            discountPrice: 199.999
        },
        {
            id: 3,
            name: "Digital Marketing",
            image: product,
            description: "Strategies to boost your market presence digitally.",
            rating: 3,
            price: 250.999,
            discountPrice: 225.999
        },
        {
            id: 4,
            name: "Digital Marketing",
            image: product,
            description: "Strategies to boost your market presence digitally.",
            rating: 3,
            price: 250.999,
            discountPrice: 225.999
        },
        {
            id: 5,
            name: "Digital Marketing",
            image: product,
            description: "Strategies to boost your market presence digitally.",
            rating: 3,
            price: 250.999,
            discountPrice: 225.999
        },
    ];
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
            }
        }
        return stars;
    };
    const calculateDiscountPercentage = (price, discountPrice) => {
        const discount = ((price - discountPrice) / price) * 100;
        return Math.round(discount);
    };

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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 py-2">
                <div className="text-center md:flex-1 mb-4 md:mb-0">
                    <h2 data-aos="fade-up"
                        data-aos-duration="1000" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8b9679] mb-2">
                        Training Products
                    </h2>
                    <p data-aos="fade-down"
                        data-aos-duration="1000" className="text-sm md:text-md lg:text-lg text-[#496989]">
                        Enhance your skills with our tailored training programs.
                    </p>
                </div>
                <button data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[#feba5b] font-bold py-2 px-3 rounded-full hover:text-blue-700 transition-colors duration-300 flex items-center">
                    See All <ArrowForwardIcon fontSize='small' />
                </button>
            </div>
            <div className="container mx-auto px-4 ">
                <Slider {...settings} className="space-x-4">
                    {trainingProducts.map(product => (
                        <div key={product.id} className="px-2">
                            <div className="bg-white shadow-lg rounded-[25px] overflow-hidden">
                                <img data-aos="fade-up" data-aos-duration="1000" src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 data-aos="fade-up" data-aos-duration="1000" className="text-xl text-[#124076] font-semibold mb-2">{product.name}</h3>
                                    <p data-aos="fade-up" data-aos-duration="1000" className="text-sm text-gray-500 mb-2">{product.description}</p>
                                    <div data-aos="fade-up" data-aos-duration="1000" className="flex items-center mb-2">
                                        {renderStars(product.rating)}
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">
                                            <s className="text-[#FFA27F] text-sm">Rp. {product.price.toFixed(3)}</s>
                                            <span className="text-sm text-gray-500 ml-1">({calculateDiscountPercentage(product.price, product.discountPrice)}% OFF)</span>
                                        </span>
                                    </div>
                                    <p className="text-[#39e8a2] mt-[-20px] mb-2" style={{fontSize:'25px', fontWeight:'600'}}>Rp. {product.discountPrice.toFixed(3)}</p>
                                    <button
                                        className="w-full bg-[#feba5b] text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 flex justify-center items-center gap-2">
                                        <ShoppingCartIcon /> Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Product
