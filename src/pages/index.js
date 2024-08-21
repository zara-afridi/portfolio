import * as React from "react"
import Layout from "../components/Layout/layout";
import TileGroup from "../components/TileGroup/tileGroup";
import About from "../components/About/about";
import Typist from "react-typist";
import "@fontsource/plus-jakarta-sans"
import "../styles/global.css"


const IndexPage = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center h-screen '>
        <div className='flex flex-col justify-center'>
          <Typist startDelay={1000} avgTypingDelay={70} cursor={{show:false}}>
            <h1 id='title' className='text-4xl sm:text-6xl md:text-8xl font-extrabold text-center'>
              Hi! I'm <span className='highlight'>Zara Afridi</span> :-)
              <Typist.Backspace count={4} delay={1000}></Typist.Backspace>
            </h1>
            <h2 className='text-1xl sm:text-2xl md:text-3xl pt-4 text-center'>
              Software Developer @ <span className='font-bold'>Amazon</span>
            </h2>
          </Typist>
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