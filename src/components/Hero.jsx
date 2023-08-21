import React from 'react';
import { Link } from 'react-router-dom';
import {  micro, pic } from '../assets';

const HomePage = () => {
    const containerStyle = {
        backgroundImage: `url(${micro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the whole viewport
    };

    const contentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle} className="min-h-screen flex flex-col justify-center text-white">
                <header className="bg-transparent shadow-md">
                    {/* Header content */}
                </header>

                <section className="py-[140px] md:py-6">
                    <div className="container mx-auto">
                      <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="max-w-lg text-center ml-3 lg:ml-6 lg:text-left lg:w-1/2">
                            <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-left"> Explore | Learn | Grow</h1>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-left"> Anytime | Anywhere</h2>
                            <p className="text-lg md:text-2xl mb-6 text-left">
                                Explore a world of knowledge with our interactive and engaging courses.
                                Embark on a journey of self-discovery with our captivating courses.
                            </p>
                            <Link
                                to=""
                                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
                            >
                                Browse Courses
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                                <img src={pic} alt="Image" className="mx-auto lg:mr-10 mt-8 lg:mt-[80px] w-[95%] rounded-xl md:w-[70%] md:h-[400px]" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <section className="bg-transparent py-16">
                <div className="container mx-auto">
                    <div>
                        {/* Add your content over the image */}
                    </div>
                </div>
            </section>

            {/* Add your Services page content here */}
        </div>
    );
}

export default HomePage;







/* 


 const [text, setText] = useState('');
  const leftContentText = "Empower your education,\nwith our cutting-edge platform.\nAccess interactive lessons,\nExpert instructors,\nand grow to new heights,\nall with our platform.";
  const delay = 50; // Adjust this for typing speed
  
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText((prevText) => prevText + leftContentText[currentIndex]);
      currentIndex++;

      if (currentIndex === leftContentText.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

 <div>
            <section className='relative w-full h-screen mx-auto bg-cover bg-center'>
        <div className={`${styles.paddingX} top-[70px] w-full absolute inset-0 md:top-[120px] max-w-7xl h-[590px] mx-auto flex flex-row items-start gap-5 bg-primary opacity-60 mb-12 `}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 bg-white'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Top <span className='text-[#915eff]'>Edu</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 whitespace-pre-line`}>
              {text}
            </p>
          </div>
        </div>
        <div className=''>
          <div className=' mt-[300px] w-[350px] absolute md:ml-[290px] md:mt-[10px] md:w-[350px] md:h-[500px] md:absolute md:top-[120px] md:right-[25px]
        lg:ml-[270px] lg:mt-[10px] lg:w-[400px] lg:h-[500px] lg:absolute lg:top-[120px] lg:right-10'>
          <img src={docx} alt="istock" className='ml-2.5 h-[360px] lg:ml-[-45px] lg:mt-[30px] lg:w-[370px] w-[350px] md:h-[500px] rounded-lg cursor-pointer'/>
          <div className='mt-[-460px] ml-[8px] lg:ml-[-45px] lg:w-[370px] h-[300px] md:mt-[-499px] md:ml-[8px] md:h-[500px] bg-[#1f3d4738] w-[352px] opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md absolute backdrop-blur-sm'>
            <br />
            <br />
            <video
                 id='hover-video'
                controls
                className='rounded-sm ml-[1px] w-[372px] h-[420px] object-cover'
                poster={rufc} 
              >
                <source src={canva} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
        </div>
          </div>
      </section>
        </div>

*/