import React from 'react';
import { Link } from 'react-router-dom';
import {  micro, pic } from '../assets';

const HomePage = () => {
    const containerStyle = {
        backgroundImage: `url(${micro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle} className="min-h-screen flex flex-col justify-center text-white">
                <header className="bg-transparent shadow-md">
                    
                </header>

                <section className="py-[140px] md:py-6">
                    <div className="container mx-auto">
                      <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="max-w-lg text-center ml-3 lg:ml-6 lg:text-left lg:w-1/2">
                            <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-left"> Explore | Learn | Grow</h1>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-left"> Anytime | Anywhere</h2>
                            <p className="text-lg md:text-2xl mb-6 text-left">
                                Explore a world of knowledge with our interactive and engaging books.
                                Embark on a journey of self-discovery with our captivating books and thesis.
                            </p>
                            <Link
                                to=""
                                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
                            >
                                Browse books
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                                <img src={pic} alt="Image" className="mx-auto lg:mr-10 mt-8 lg:mt-[80px] w-[95%] rounded-xl md:w-[70%] md:h-[400px]" />
                            </div>
                            
                        </div>
                    </div>
                    
                </section>
            </div>

            
        </div>
    );
}

export default HomePage;







