import { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { courses } from "../constants";
import { grad } from "../assets";
import { motion } from "framer-motion";
const CourseCard = ({image, course}) => {



    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return <motion.div variants={itemVariants} className="flex items-center flex-col gap-4 bg-gray-600 rounded-md p-8 rounmotion.emotion.-md flex-wrap">
      <div className="">
        <img src={image} alt="" className="" />
      </div>
      <div className="text-white">{course}</div>
    </motion.div>
}

const Course = () => {
    const [review, setReview] = useState(0);
    const [name, setName] = useState(0);
    const [destination, setDestination] = useState(0);
    const [header, setHeader] = useState(0);

    const container = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.7
            },
        },
    };


  
    return ( 
        <div className="text-white" >
            <div className="text-center md:text-2xl text-3xl">
             <div>
                Our Top <span className="text-blue-light ">Categories</span>
             </div>
             <p className="text-[20px] text-gray-400 leading-7 max-w-[1000px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime pariatur iste obcaecati odit eaque, quidem corporis sapiente! 
                Aut voluptatum laudantium consectetur tempora 
                soluta dolore rem commodi ut maiores nulla. Recusandae!</p>
            </div>
            <motion.div variants={container} initial="hidden" whileInView="visible" className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
                {courses.map(course => {
                    return <CourseCard key={course.id} {...course} />
               })}
            </motion.div>
            <p className="text-white text-center mt-10 md:text-2xl text-3xl">Our Students <span className="text-blue-light">Voice</span></p>
             <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-12 gap-0">
              <div className="lg:ml-[180px]">
                <img src={grad} alt="" className="md:w-[350px] md:h-[450px] w-[95%] rounded-2xl" style={{ padding: "20px", border: "1px solid white" }} />
              </div>
             </div>
            <div className="flex flex-col mt-[100px] w-full rounded-2xl mb-0 justify-center bg-gray-800 h-[340px] md:h-[300px]">
    <h1 className="text-5xl mt-6 text-center ">Sign up for our Newsletter</h1>
    <div className="mt-8 flex  justify-center space-x-2 mb-8">
    <motion.form initial={{scale: 0 }}
    whileInView={{scale: 1}}
    transition={{duration: 0.3}} className="w-[55%] md:w-[40%] lg:w-[21%]">
    <input
            type="text"
            placeholder="Enter Email...."
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-64 outline-none"
        />
    </motion.form>

        
        <button className="bg-blue-500 text-white  px-4 py-2 rounded">
            Submit
        </button>

    </div>
   
        </div>
        </div>
     );
}
 
export default SectionWrapper(Course, "course");
