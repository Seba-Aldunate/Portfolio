import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[15px] font-bold text-center">
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
        <p className={styles.sectionSubText} >Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre mi.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] max-w-3xl leading-[25px]"
      >
        Soy un desarrollador web full stack con un apetito insaciable por el
        aprendizaje y la innovación. Mis primeros pasos en el mundo tecnológico
        están guiados por la pasión por crear soluciones digitales prácticas y
        visualmente atractivas. Mi enfoque radica en explorar nuevas
        perspectivas para resolver desafíos y llevar a cabo proyectos que
        inspiren. A través de la codificación, busco crear experiencias
        digitales que combinen funcionalidad y diseño de manera única.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about") 
