import React, {useEffect} from 'react'
import profile from '../../../assets/user.png'
import AOS from "aos";
import "aos/dist/aos.css";
const FounderComponent = ({ name, role, bio, image }) => {
    return (
        <div className="bg-white  p-6 shadow-lg rounded-[20px] flex flex-col items-center">
            <div className="mb-4">
                <img data-aos="zoom-in-left"
                    data-aos-duration="1000" src={image} alt={name} className="h-24 w-24 rounded-full object-cover" />
            </div>
            <div className="text-center">
                <h3 data-aos="zoom-in-right"
                    data-aos-duration="1000" className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                <p data-aos="zoom-in-left"
                    data-aos-duration="1000" className="text-sm text-gray-500 mb-1">{role}</p>
                <p data-aos="zoom-in-right"
                    data-aos-duration="1000" className="text-gray-600">{bio}</p>
            </div>
        </div>
    );
}

const Founder = () => {
    const founders = [
        { name: "Deni Rahmadani", role: "CEO", bio: "Deni has over 20 years of experience in the training industry.", image: profile },
        { name: "Iqbal Apredo", role: "CTO", bio: "Iqbal is a pioneer in digital learning technologies.", image: profile },
        { name: "Maulana Lazuardi", role: "Commissioner", bio: "Maulana brings extensive expertise in business strategy.", image: profile },
        { name: "Handi Muharam", role: "President Commissioner", bio: "Handi is a respected leader with a proven track record in governance.", image: profile }
    ];
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id='founder' className="about-us-sections">
            <section className="w-full py-16  flex flex-col items-center">
                <div className="max-w-7xl mx-auto text-center px-4">
                    <h2 data-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-4xl font-bold text-[#8b9679] mb-4">Our Leadership Team</h2>
                    <p data-aos="zoom-in-right"
                        data-aos-duration="1000" className="text-lg text-[#496989] mb-8">
                        Meet the visionary leaders behind Creativehr.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {founders.map((founder, index) => (
                            <FounderComponent
                                key={index}
                                name={founder.name}
                                role={founder.role}
                                bio={founder.bio}
                                image={founder.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Founder;
