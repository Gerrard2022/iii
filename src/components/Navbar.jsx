import React, { useEffect, useState} from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleLinkClick = () => {
    // Reload the page when a link is clicked
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent ${
      showNavbar ? '' : 'opacity-0 pointer-events-none'
    }`} style={{ transitionDuration: '0.3s' }} >
       <div className="w-full flex justify-between
       items-center max-w-7xl mx-auto">
         <a href='/' className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
         }}>
          <img src={logo} alt="logo" className="w-[30px] h-18 md:-mt-4 object-contain md:w-[100px]" />
          <p className='text-white text-[18px] font-bold cursor-pointer md:-mt- flex'>III </p>
         </a>
         <ul className='list-none hidden sm:flex flex-row gap-10'>
               {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-white"}
                hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {setActive(link.title);
                handleLinkClick();}}>
                   <Link to={link.id} spy={true} smooth={true} duration={500} offset={-50}>
                    {link.title}
                   </Link>
                </li>
               ))}
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu } alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute
                top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                      <ul className='list-none flex justify-end items-start flex-col gap-4'>
               {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-white"}
                font-poppins font-medium text-[16px] cursor-pointer`} onClick={() => {setToggle(!toggle)
                  setActive(link.title);
                  handleLinkClick();
                }}>
                 <Link to={link.id} spy={true} smooth={true} duration={500}>
                    {link.title}
                   </Link>
                </li>
               ))}
         </ul>
                </div>
         </div>
       </div>
    </nav>
  );
};

export default Navbar;


