import React, { useEffect } from 'react';
import product from '../../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <>
          <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                  <h2 data-aos="fade-up"
                      data-aos-duration="1000" className="text-4xl font-bold text-[#8b9679] mb-4">Training Products</h2>
                  <p data-aos="fade-down"
                      data-aos-duration="1000" className="text-lg text-[#496989] mb-8">
                      Enhance your skills with our tailored training programs.
                  </p>
              </div>
              <button data-aos="fade-up"
                  data-aos-duration="1000"
                  className="bg-[#feba5b] text-white font-bold py-2 px-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center ">
                  See All <ArrowForwardIcon fontSize='small'/>
              </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingProducts.map(product => (
                  <div key={product.id} className="bg-white shadow-lg rounded-[20px] overflow-hidden">
                      <img data-aos="fade-up" data-aos-duration="1000" src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                      <div className="p-6">
                          <h3 data-aos="fade-up"
                              data-aos-duration="1000" className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p data-aos="fade-up"
                              data-aos-duration="1000" className="text-sm text-gray-500 mb-2">{product.description}</p>
                          <div data-aos="fade-up"
                              data-aos-duration="1000" className="flex items-center mb-4">
                              {renderStars(product.rating)}
                          </div>
                          <div data-aos="fade-up"
                              data-aos-duration="1000" className="flex justify-between items-center mb-4">
                              <span className="text-xl font-bold text-gray-900"><s className="text-red-500 text-sm">Rp. {product.price.toFixed(3)}</s> <s className='text-[green]'>Rp. {product.discountPrice.toFixed(3)}</s> </span>
                          </div>
                          <button data-aos="fade-up"
                              data-aos-duration="1000"
                              className="w-full bg-[#feba5b] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 flex justify-center items-center gap-2">
                              <ShoppingCartIcon /> Checkout
                          </button>
                      </div>
                  </div>
              ))}
          </div>
    </>
  )
}

export default Product