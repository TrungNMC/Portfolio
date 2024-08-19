'use client';

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { useState } from 'react';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Front-end Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-accent'>Trung Nguyen</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programing languages and technologies.
            </p>

            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href='./CV_Front end_Nguyen Mai Chi Trung.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                >
                  Download CV
                  <FiDownload className='text-xl'></FiDownload>
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
