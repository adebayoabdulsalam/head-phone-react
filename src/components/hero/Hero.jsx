import React from 'react'
import  first  from '../../images/img/first.png';
import  second  from '../../images/img/second.png';
import  last from '../../images/img/last.png';

const headPhoneData = [
    {
        image: first,
        id: 1,
        title: 'Headphone wireless',
        price: '$199',  
        modal: 'Modal Brown',
        bgColour: '#8b5958',
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing Elit. Ipsam, saoiente.",
    },
    {
        image: second,
        id: 2,
        title: 'Headphone wireless',
        price: '$199',  
        modal: 'Line Grenn',
        bgColour: '#638152',
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing Elit. Ipsam, saoiente.",
    },
    {
        image: last,
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
  return (
    <>
        <section className='bg-brandDark text-white'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
                {/*_ Headphone Info_*/}
                <div className='flex flex-col justify-center py-14 md:py:0 kl:max-w-[700px}'>
                    <h1 className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</h1>
                </div>
                {/*_ Hero Image_*/}
                {/*_ WhatsApp Icon_*/}
            </div>
        </section>
    </>
  );
};

export default Hero
