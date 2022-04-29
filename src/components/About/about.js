import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const About = () => {

  return (
    <div>
      <div id='about' className='mb-8 scroll-mt-12'>
        <div className='text-5xl font-extrabold py-8'>About</div>
        <div className='flex flex-col-reverse md:justify-between md:flex-row' >
          <div className='md:w-7/12'>
            <p className='pb-4'>My love of all things software development began in university where (after initially applying to a Life Sciences degree) I took an Intro to Coding course, fell in love, and changed my major immediately. I graduated from <a href='https://www.yorku.ca/' target="_blank" rel='noreferrer' className='highlight transition duration-200 border-b border-transparent hover:border-pink'>York University</a> in April 2020 with a Hons. Bachelors in Computer Science.</p>
            <p className='pb-4'>It's been a long journey since that first course and I've loved every step of it! I am currently working as a Software Development Engineer at <a href='https://www.publicissapient.com/' target="_blank" rel='noreferrer' className='highlight transition duration-200 border-b border-transparent hover:border-pink'>Publicis Sapient</a> where I am focusing on building accessible and performant applications with Salesforce.</p>
            <p className='pb-4'>In my free time, I love to read, bake, expand my Pokémon figurine collection, and learn about cool new technologies.</p>
            <p className='pb-4'>Please explore this site and feel free to contact me should you have any questions or comments!</p>
          </div>
          
          <div className='m-4 md:ml-4 w-1/2 self-center h-fit shadow transform hover:scale-[1.03] transition-all rounded-full w-full md:w-1/3 2xl:w-1/4 bg-gradient-to-r from-[#D1B5DF] to-[#C77890] p-2'>
            <div className='bg-black p-4 rounded-full'>
              <StaticImage
                alt="A headshot of a woman with dark brown hair and a white sweater smiling into the camera."
                src="../../images/headshot.jpg"
                className='!rounded-full'
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About;