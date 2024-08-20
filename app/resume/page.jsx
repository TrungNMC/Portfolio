'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
  title: 'About Me',
  description:
    'I am a person who is eager to learn, keep up with new technology trends and always try to complete assigned tasks well. I am also someone who can work well in a team and easily adapt to new working environments.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Trung Nguyen',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+84) 03 764 0009',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Vietnamese',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Vietnamese',
    },
    {
      fieldName: 'Email',
      fieldValue: 'nguyenmaichitrung1912@gmail.com',
    },
  ],
};

// experience data
const experience = {
  icon: 'assets/resume/badge.svg',
  title: 'My experience',
  description:
    'I am an FE developer with 3 years of web development experience. For 3 years, I worked at 2 companies: FPT Software and Mevivu.',
  items: [
    {
      company: 'FPT Software',
      position: 'Front-end Developer',
      duration: 'Dec 2021 - Present',
    },
    {
      company: 'Mevivu',
      position: 'Front-end Developer',
      duration: ' Aug 2021 - Dec 2021',
    },
  ],
};

// education data
const education = {
  icon: 'assets/resume/cap.svg',
  title: 'My education',
  description: (
    <>
      <p>University of Transport and Communications</p>
      <p>My major is Information Technology.</p>
      <p>GPA: 3.17/4</p>
    </>
  ),
  items: [
    {
      institution: 'UTC',
      degree: 'Student',
      duration: '2018 - 2022',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi in rerum, vel dolore hic harum voluptatem.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex justify-center py-12 xl:py-0'
    >
      <div className='container max-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70px] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>

                <p className='text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <div>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>
                        Programming Languages:&nbsp;
                      </div>
                      HTML, CSS, JavaScript, TypeScript,...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>
                        Frameworks and libraries:&nbsp;
                      </div>
                      React, Next.js, Vue.js, jQuery,...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>UI libraries:&nbsp;</div>
                      Material UI, Ant Design, Bootstrap, Shadcn/ui, Tailwind...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>State management:&nbsp;</div>
                      Redux, Redux Saga, Redux Toolkit,Zustand,...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>Databases:&nbsp;</div>MySQL,
                      SQLServer, MongoDB,...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>Development Tools:&nbsp;</div>
                      Git, Figma, npm, yarn, Jest, Webpack, GCP, Azure,...
                    </p>
                    <p className='text-white/60 flex sm:flex-row flex-col'>
                      <div className='text-white'>Agile methodology:&nbsp;</div>
                      Scrum
                    </p>
                  </div>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] mb-10 '>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620p] mx-auto xl:mx-0'>
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='flex items-center justify-center xl:justify-start gap-4'
                        >
                          <span className='text-sm text-white/60'>
                            {item.fieldName}
                          </span>
                          <span className='text-sm'>{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
