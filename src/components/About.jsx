import React from "react";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
   return (
      <Tilt className="xs:w-[250px] w-full">
         <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
         >
            <div
               options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
               }}
               className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
               <img src={icon} className="w-16 h-16 object-contain" alt="" />
               <h3 className="text-white text-[20px] font-bold text-center">
                  {title}
               </h3>
            </div>
         </motion.div>
      </Tilt>
   );
};

const About = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
         </motion.div>
         <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
         >
            Seeking a position in the software development field that offers a
            challenging environment where I can improve my skills and
            participate in achieving organizational excellence by applying what
            I learned through my practical experience in my education journey.
         </motion.p>
         <div className="mt-20 flex justify-center sm:justify-around  flex-wrap gap-10  ">
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
            ))}
         </div>
      </>
   );
};

export default SectionWrapper(About, "about");
