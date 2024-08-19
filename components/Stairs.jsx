import { animate, motion } from 'framer-motion';

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// caculated reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stair = () => {
  return (
    <>
      {/* render 6 motion divs, each respenting a step of the stair. 
  Each div will have the same animation defined by stairAnimation object. 
  The delay for each div is caculated simanically base on it reversed index,
  creating a staggered effect with decreasing delay for each subsequent step
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className='h-full w-full bg-white relative'
          />
        );
      })}
    </>
  );
};

export default Stair;
