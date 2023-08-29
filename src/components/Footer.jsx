import { FaYoutube, FaInstagram, FaTwitter,  FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
 const Footer = () => {

    return ( 
        <motion.div initial={{height: 0}} 
        whileInView={{height: "auto"}}
        transition={{duration: 0.1}} className="text-white p-10 bg-gray-900">
           <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 place-items-start gap-8'>
            <div>
                <div className='font-bold mb-4'>Get started</div>
                <p className='text-sm leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia explicabo quibusdam consequuntur officiis consectetur.
                </p>
            </div>
            <div>
                <div className='font-bold mb-6'>
                 Services
                </div>
                <div className='flex flex-col gap-4'>
                <a href="" className='text-sm hover:underline'>{" "}Written Collection</a>
                <a href="" className='text-sm hover:underline'>{" "}Visual Vault</a>
                <a href="" className='text-sm hover:underline'>{" "}Teachers Section</a>
                <a href="" className='text-sm hover:underline'>{" "}Overall Management</a>
                </div>
            </div>
            <div>
                <div className='font-bold mb-6'>
                Company
            </div>
            <div className='flex flex-col gap-4'>
                <a href="" className='text-sm hover:underline'>Privacy Policy </a>
                <a href="" className='text-sm hover:underline'>Sitemap</a>
                <a href="" className='text-sm hover:underline'>Careers</a>
                <a href="" className='text-sm hover:underline'>Terms & Condition</a>
            </div>
            </div>
            <div>
                <div className='font-bold mb-6'>Follow us</div>
            
            <div className='text-sm mb-4'>
             top.edu@gmail.com
            </div>
            <div className='text-sm'>
              +250790075138
            </div>
            <div className='flex gap-4 mt-4'>
             <a href="" className='hover:scale-110 text-xl'><FaYoutube /></a>
             <a href="" className='hover:scale-110 text-xl'><FaInstagram /></a>
             <a href="" className='hover:scale-110 text-xl'><FaTwitter /></a>
             <a href="" className='hover:scale-110 text-xl'><FaFacebook /></a>
            </div>
            </div>
           </div>
        </motion.div>
     );
}
 
export default Footer;