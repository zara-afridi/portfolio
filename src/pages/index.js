import * as React from "react"
import Layout from "../components/Layout/layout";
import TileGroup from "../components/TileGroup/tileGroup";
import "@fontsource/plus-jakarta-sans"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center h-screen '>
        <div className='flex flex-col justify-center'>
          <h1 id='title' className='text-5xl font-extrabold text-center'>Hi! I'm <span className='highlight'>Zara Afridi</span></h1>
          <h2 className='text-2xl pt-4 text-center'>Software Developer @ <span className='font-bold'>Publicis Sapient</span></h2>
        </div>
        {/* <div className='h-fit shadow transform hover:scale-[1.03] transition-all rounded-full w-full md:w-1/3 2xl:w-1/4 bg-gradient-to-r from-[#D1B5DF] to-[#C77890] p-2'>
          <div className='bg-black p-4 rounded-full'>
            <StaticImage
              alt="A headshot of a woman with dark brown hair and a white sweater smiling into the camera."
              src="../images/final_headshot.jpg"
              className='rounded-full'
            />
          </div>
        </div> */}
      </div>
      <div className='my-8' id="about">
        <div className='text-5xl font-extrabold py-8'>About</div>
        <div className='flex flex-col'>
          <p></p>
        </div>
      </div>
      <div>
          <TileGroup></TileGroup>
      </div>
    </Layout>
  )
}

export default IndexPage;