import React from "react";
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}> Introduction</p>
      <h2 className={styles.sectionHeadText}> Overview</h2>
    </motion.div>
    
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Hello there! I'm Sadiq, a passionate and detail-oriented software engineer who is enthusiastic about creating efficient, innovative, and user-friendly solutions. With a fresh perspective and a foundation in Python, Javascript, HTML, CSS, React e.t.c . I'm eager to utilise my skills and knowledge to exciting projects and collaborative teams, coupled with my management and human skill while making a significant contribution to the success of the organisation.  
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
};

export default About
// export default SectionWrapper (About, "about")