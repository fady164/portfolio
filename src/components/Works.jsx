import React from "react";
import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";
import { git, github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
   index,
   name,
   tags,
   description,
   source_code_link,
   image,
}) => {
   return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <Tilt
            options={{
               max: 45,
               scale: 1,
               speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
         >
            <div className="relative w-full h-[230px]">
               <img
                  src={image}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
               />
            </div>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
               <div
                  onClick={() => {
                     window.open(source_code_link, "_blank");
                  }}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
               >
                  <img
                     src={github}
                     className="w-3/4 h-3/4 object-contain"
                     alt=""
                  />
               </div>
            </div>
            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{name}</h3>
               <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
               {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>
      </motion.div>
   );
};

const Works = () => {
   return (
      <>
         <motion.div variants={textVariant()} id="work">
            <p className={`${styles.sectionSubText}`}>My Work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
         </motion.div>
         {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa id et
          in doloremque accusamus quia fuga inventore incidunt dolorem,
          repudiandae, adipisci tempora beatae magni quam consectetur
          necessitatibus ratione minima reiciendis! Omnis aperiam voluptas saepe
          blanditiis tempora illum perferendis quia facilis! Corporis, iure
          exercitationem excepturi rerum voluptate a natus illo accusamus
          dolorem atque delectus asperiores maxime repudiandae necessitatibus,
        </motion.p>
      </div> */}
         <div className="mt-20 flex flex-wrap gap-7 justify-center md:justify-start">
            {projects.map((project, index) => (
               <ProjectCard key={index} index={index} {...project} />
            ))}
         </div>
      </>
   );
};

export default SectionWrapper(Works, "");
