import * as React from "react"
import Layout from "../components/Layout/layout";
import TileGroup from "../components/TileGroup/tileGroup";
import About from "../components/About/about";
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
      </div>
      <div>
        <About></About>
      </div>
      <div>
          <TileGroup></TileGroup>
      </div>
    </Layout>
  )
}

export default IndexPage;