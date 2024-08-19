'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

// components
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'ASCOTT BRAND',
    title: 'ASCOTT BRAND',
    description:
      'The project entailed the creation of a branded website that allows end users to book apartments using specific vouchers and promotional codes. It incorporates complex logic in the background to calculate prices based on different coupon types, promo codes, and membership levels.',
    stack: 'HTML, CSS, JavaScript, VueJS, Figma, Git, Azure, Jira,...',
    image: '/assets/work/thumb1.jpg',
    live: 'https://www.discoverasr.com/en',
    github: '',
  },
  {
    num: '02',
    category: 'JOBKOREA',
    title: 'JOBKOREA',
    description:
      'Professional part-time job search site created by Job Korea. Albamon offers web and app versions, target customers are both job seekers and companies.​ Users can search for part time job information by working location, working time, industry field, wage, bonus,...',
    stack:
      'HTML, CSS, TypeScript, NextJS, Figma, Git, Chart.js, GSAP, Azure, Jira,...',
    image: '/assets/work/thumb2.png',
    live: 'https://www.albamon.com/',
    github: '',
  },
  {
    num: '03',
    category: 'CLS_GTO',
    title: 'CLS_GTO',
    description:
      "Revamp existing portal for CLs retails POS integration. The project handles the website's admin page, so there are no public links",
    stack:
      'HTML, CSS, JavaScript, ReactJS, MaterialUI, Figma, Git, Azure, Jira,...',
    image: '/assets/work/thumb3.jpg',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProjects] = useState(projects[0]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProjects(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center pu-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* project stack */}
              <div className='text-xl text-accent'>
                Technology: {project.stack}
              </div>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>Live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerview={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image src={project.image} fill className='' alt='' />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
