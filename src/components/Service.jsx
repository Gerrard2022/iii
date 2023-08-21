import { useState, useEffect } from 'react';
import React from 'react';
import { rufc, photo } from '../assets';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Service = () => {
    const carouselImages = [ photo ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const fadeInVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.75 } },
    };
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 } }
  }
  const slideInLeftVariants = {
    hidden: { x: -80 },
    visible: { x: 0, transition: { duration: 2 } },
};

const slideInRightVariants = {
    hidden: { x: 80 },
    visible: { x: 0, transition: { duration: 2 } },
};
    return (
        <div className="bg-gray-900 text-white py-10 px-4">
            <div className="bg-gray py-8 text-center ">
                {/* Content for the upper div */}
                <h1 className="text-5xl font-semibold mb-2">Explore Educationial Services</h1>
                <p className="text-lg">Unlock a world of knowledge with our curated educational content.</p>
            </div>
            <motion.div className="bg-gray-800 py-8 text-center md:flex md:flex-wrap md:w-[90%] rounded-md md:ml-9 md:items-center md:justify-center"
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible">
                {/* Content for the white background section */}
                <motion.div className="w-full md:w-1/3 p-4"
                 variants={fadeInVariants}
                 initial="hidden"
                 animate="visible">
                    <img src={carouselImages[currentImageIndex]} alt="Service" className="w-full h-[300px] md:h-[450px] rounded-lg"/>
                </motion.div>
                <motion.div className="w-full p-4 md:w-1/3" variants={fadeIn}
                    initial="hidden"
                    animate="visible" >
                <h1 className='text-xl font-semibold mb-2 text-white text-left'>BOOKS SIDE</h1>
                    <h2 className="text-3xl font-semibold text-white mb-2 text-left">Explore Educational Services</h2>
                    <p className="text-lg text-white text-left"> Explore a diverse selection of educational books spanning various subjects. 
                    Our thoughtfully curated collection equips you with
                     knowledge and insights for success. From science to literature, these
                     books foster continuous learning and personal development..</p>
                     <ul className="list-none pl-6 mt-4 text-left text-white">
                        <li>&#x2713; Gain access to diverse educational content.</li>
                        <li>&#x2713; Stay up-to-date.</li>
                        <li>&#x2713; Expand your horizons and boost your skills.</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                        Start Exploring
                    </button>
                </motion.div>

            </motion.div>
            <motion.div className="bg-gray-800 py-8 md:w-[90%] rounded-md lg:ml-[100px] md:ml-[60px] mt-3 md:flex md:flex-wrap md:items-center md:justify-center"
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible">
                {/* Content for the dim background section */}
                <motion.div className="w-full md:w-1/3 p-4" variants={fadeIn}
                    initial="hidden"
                    animate="visible" >
                <h1 className='text-xl font-semibold mb-2 text-white text-left'>VIDEOS SIDE</h1>
                    <h2 className="text-3xl font-semibold text-white mb-2">Explore Educational Services</h2>
                    <p className="text-lg text-white">  Discover engaging video lessons that cover a wide array of subjects. Our 
                    carefully selected videos provide you with a dynamic learning experience that caters to various learning 
                    styles. Whether you're looking to understand complex concepts or explore new interests, our educational videos offer
                     insights and knowledge to fuel your intellectual curiosity.</p>
                     <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                        Learn More
                    </button>
                </motion.div>
                <motion.div className="w-full md:w-1/3 p-4" variants={fadeInVariants}
                    initial="hidden"
                    animate="visible">
                    <img src={rufc} alt="Service" className="w-full h-[300px] md:h-[450px] rounded-lg" />
                </motion.div>
            </motion.div>
            <div className="flex flex-col mt-6 rounded-lg mb-0 justify-center bg-gray-800 h-[340px] md:h-[300px]">
    <h1 className="text-5xl mt-0 text-center ">Sign up for our Newsletter</h1>
    <div className="mt-8 flex  justify-center space-x-2">
        <input
            type="text"
            placeholder="Enter Email...."
            className="border border-gray-300 rounded px-3 py-2 w-54 md:w-64"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
        </button>

    </div>
    <div className=" mt-8 flex justify-center space-x-4">
                <a href="https://www.youtube.com" target="_blank">
                    <FaYoutube className="text-4xl text-white hover:text-blue-300 mr-4" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram className="text-4xl text-white hover:text-blue-300 mr-4" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <FaTwitter className="text-4xl text-white hover:text-blue-300 mr-4" />
                </a>
                <a href="https://www.github.com" target="_blank">
                    <FaGithub className="text-4xl text-white hover:text-blue-300 mr-4" />
                </a>
             
            </div>
            <div className=" -mt-2 flex justify-center space-x-4">
            <p className="mt-8 text-gray-300 sm:ml-2">&copy; 2023 Top Edu. All rights reserved.</p>
            </div>
    
</div>


        </div>
    );
}

export default Service;
