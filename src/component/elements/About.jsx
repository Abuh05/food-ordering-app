import React from 'react'
import aboutImage from '../../assets/images/about-image.png'

const About = () => {
  return (
    <div className='bg-indigo-500'>
        <div className='p-24 grid grid-cols-2'>
            <div className=''>
                <h2 className='text-2xl font-medium'>About Us </h2>
                <p className='text-xl text-white'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt neque temporibus, 
                    libero ea repudiandae culpa iste quos soluta ad adipisci?
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={aboutImage} alt="aboutImage" className='w-[400px] h-[400px] object-cover'   />
            </div>
        </div>
    </div>
  )
}

export default About