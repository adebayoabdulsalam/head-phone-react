import React from 'react'
import Blog1 from '../../images/blog1.jpg'
import Blog2 from '../../images/blog2.jpg'
import Blog3 from '../../images/blog3.jpg'
import Blog4 from '../../images/blog4.jpg'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

const BlogsData = [
    {
        id:1,
        title: 'Lorem ipsum dolor sit amet consectetur adipsicing elit',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut ideos accusantiumaut, aperiam quis incidunt!',
        link: '#',
        img: Blog1,
    },
    {
        id:2,
        title: 'Lorem ipsum dolor sit amet consectetur adipsicing elit',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut ideos accusantiumaut, aperiam quis incidunt!',
        link: '#',
        img: Blog2,
    },
    {
        id:3,
        title: 'Lorem ipsum dolor sit amet consectetur adipsicing elit',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut ideos accusantiumaut, aperiam quis incidunt!',
        link: '#',
        img: Blog3,
    },
    {
        id:4,
        title: 'Lorem ipsum dolor sit amet consectetur adipsicing elit',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut ideos accusantiumaut, aperiam quis incidunt!',
        link: '#',
        img: Blog4,
    },
]



const Blog = () => {
  return (
    <>
        <section>
            <div className='container py-14'>
                <h1 className=' text-3xl font bold text-center font-poppins pb-8'>Blogs</h1>                
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {BlogsData.map((data) => {
                    return (
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'black',
                            xIndex: 999,
                            followSpeed: 1.5,
                            text: "read",
                            textFontSize: '3px',
                            scale: 5,
                        }}
                        >
                             <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[] mx-auto shadow-lg reunded-md bg-white hover:-translate-y-2 duration-300'>
                            <img src={data.img} alt="" />
                            <div className='space-y-2'>
                            <h1 className='text-lg font-bold line-clamp-1'>{data.title}</h1>
                            <p className='line-clamp-1'>{data.desc}</p>
                            </div>
                        </div>   
                        </UpdateFollower>
                    )
                })}
            </div>
        </section> 
    </>
  )
}

export default Blog
