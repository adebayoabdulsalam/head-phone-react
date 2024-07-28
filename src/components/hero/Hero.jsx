import React from 'react'
import  headphone1  from '../../images/headphone.png';
import  headphone2  from '../../images/headphone2.png';
import  headphone3 from '../../images/headphone3.png';
import { FaWhatsapp } from 'react-icons/fa';
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const fadeUp = ( delay ) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeInOut,
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
            duration: 0.2,
            ease: easeInOut,
        }
    }
  }
}

const headPhoneData = [
    {
        image: headphone1,
        id: 1,
        title: 'Headphone wireless',
        price: '$199',  
        modal: 'Modal Brown',
        bgColour: '#8b5958',
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing Elit. Ipsam, saoiente.",
    },
    {
        image: headphone2,
        id: 2,
        title: 'Headphone wireless',
        price: '$199',  
        modal: 'Line Grenn',
        bgColour: '#638152',
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing Elit. Ipsam, saoiente.",
    },
    {
        image: headphone3,
        id: 3,
        title: 'Headphone wireless',
        price: '$199',  
        modal: 'blue',
        bgColour: '#5d818c',
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing Elit. Ipsam, saoiente.",
    }
]

const Hero = () => {
    const [activeData,setActiveData] = React.useState
    (headPhoneData[0]);
    const handleActiveData = (data) => {
        setActiveData(data);
    };
  return (
    <>
        <section className='bg-brandDark text-white font-varela'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
                {/*_ Headphone Info_*/}
                <div className='flex flex-col justify-center py-14 md:py:0 kl:max-w-[700px}'>
                    <div className='space-y-5 md:text-left text-center'>
                        <AnimatePresence mode='wait'>
                        <UpdateFollower 
                            mouseOptions={{
                                 backgroundColor: 'white',
                                 zIndex: 9999,
                                 followSpeed: 0.5,
                                 rotate: -720,
                                 mixBlendMode: 'difference',
                                 scale: 10,
                            }}>
                            <motion.h1
                                 key={activeData.id}
                                 variants={fadeUp(0.2)}
                                 initial='hidden'
                                 animate="show"
                                 exit='exit'
                                 className='text-3xl lg:text-6xl font-bold font-varela'
                         >

                        {activeData.title} 
                        </motion.h1>

                            </UpdateFollower>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                        <motion.p 
                         key={activeData.id}
                         variants={fadeUp(0.3)}
                         initial='hidden'
                         animate="show"
                         exit='exit'
                        className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                        </AnimatePresence>
                        
                        <AnimatePresence mode='wait'>
                        <UpdateFollower
                             mouseOptions={{
                                 backgroundColor: activeData.bgColour,
                                 zIndex: 9999,
                                 followSpeed: 0.5,
                                 rotate: -720,
                                 scale: 6,
                                 backgroundElement: (
                                    <div>
                                        <img src={activeData.image}/>
                                    </div>
                                ),
                            }}
                            >
                        <motion.button 
                              key={activeData.id}
                              variants={fadeUp(0.3)}
                              initial='hidden'
                              animate="show"
                              exit='exit'
                              style={{backgroundColor: activeData.bgColour}}
                            className="px-4 py-2 inline-block font-normal rounded-sm"
                            >Buy and Listen</motion.button>
                        </UpdateFollower>
                        </AnimatePresence>

                            {/* _ Headphone List Separator _*/}

                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm'>Top Headphones for you</p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                            {/*Headphone list swicher */}
                            <div className='grid grid-cols-3 gap-10'>
                                
                                {headPhoneData.map((item) => {
                                    return (
                                        <UpdateFollower 
                                        mouseOptions={{
                                            backgroundColor: item.bgColour,
                                            zIndex: 9999,
                                            followSpeed: 0.5,
                                            text: 'view Detail',
                                            textFontSize: '3px',
                                            scale: 5,
                                        }}>
                                           <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div>
                                            <img src={item.image} alt=""className='w-[200px]' />
                                        </div>
                                        <div className='space-y-2'>           
                                            <p className='text-base font-bold'>{item.price}</p>
                                            <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                        </div>
                                        </div>   
                                        </UpdateFollower>
                                    )
                                })}
                            </div>
                    </div>
                </div>

                {/*_ Hero Image_*/}
                <div className='flex flex-col justify-end items-center'>
                <AnimatePresence mode='wait'>
                <motion.img                         
                 key={activeData.id}
                 initial={{opacity: 0, scale: 0.9, y: 100}} 
                 animate={{opacity: 1, scale: 1, y: 0}} 
                 transition={{duration: 0.5, delay: 0.2, ease: easeInOut}} 
                 exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 100,

                    transition: {
                        duration: 0.2,
                    },
                 }}
                 src={activeData.image} 
                 alt="" className='w-[300px] md:w-{400px} xl:w-{550px}' />
                </AnimatePresence>
                </div>
                {/*_ WhatsApp Icon_*/}
                <div>
                    <a href="">
                        <FaWhatsapp className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'/>
                    </a>
                </div>
            </div>
        </section>
    </>
  );
};

export default Hero
