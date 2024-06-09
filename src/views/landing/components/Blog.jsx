import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
    const blogPosts = [
        { id: 1, title: "First Blog Post", date: "June 1, 2024", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, title: "Second Blog Post", date: "June 5, 2024", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 3, title: "Third Blog Post", date: "June 10, 2024", excerpt: "Duis aute irure dolor in reprehenderit in  Ut enim ad minim veniam, quis nostrud exercitation voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    ];
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 data-aos="zoom-in-left"
                    data-aos-duration="1000" className="text-4xl font-bold text-[#8b9679] mb-4">Creativehr's Article</h2>
                <p data-aos="zoom-in-right"
                    data-aos-duration="1000" className="text-lg text-[#496989] mb-1">
                    Explore our insightful articles and learn more about industry trends and innovations.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 data-aos="zoom-in-left"
                            data-aos-duration="1000" className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p data-aos="zoom-in-right"
                            data-aos-duration="1000" className="text-[#496989] text-sm mb-2">{post.date}</p>
                        <p data-aos="zoom-in-left"
                            data-aos-duration="1000" className="text-gray-700">{post.excerpt}</p>
                        <a data-aos="zoom-in-right"
                            data-aos-duration="1000" href={`/blog/${post.id}`} style={{ fontSize: '13px' }} className="text-[#feba5b] font-semibold hover:text-blue-700">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
