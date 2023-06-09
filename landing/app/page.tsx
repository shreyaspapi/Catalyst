'use client'
import Image from 'next/image'
import React from 'react'
import Github from '../public/github.png'
import Youtube from '../public/youtube.png'
import Mobile from './mobile'
import Discord from '../public/discord.png'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <motion.div
      transition={{
        duration: 10,
        type: 'tween',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      initial={{
        backgroundColor: 'hsla(240,89%,39%,1)',
        backgroundImage:
          'radial-gradient(at 25% 0%, hsla(252,100%,70%,1) 0px, transparent 50%),radial-gradient(at 95% 82%, hsla(270,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(343,100%,76%,1) 0px, transparent 50%), radial-gradient(at 78% 92%, hsla(175,98%,70%,0.24) 0px, transparent 50%), url(/noise.svg)',
      }}
      animate={{
        backgroundColor: 'hsla(24,90%,68%,1)',
        backgroundImage:
          'radial-gradient(at 44% 0%, hsla(306,100%,70%,1) 0px, transparent 50%),radial-gradient(at 99% 98%, hsla(338,100%,61%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(343,100%,76%,1) 0px, transparent 50%),radial-gradient(at 54% 98%, hsla(111,92%,50%,0.87) 0px, transparent 50%), url(/noise.svg)',
      }}
      className=" md:h-screen grid items-center justify-center py-12 px-6"
    >
      <div className="grid md:grid-cols-[auto,1fr] grid-cols-1 grid-flow-rows items-center md:gap-20 ">
        <Mobile />
        <div className="grid gap-6 mt-20 ">
          <div className="grid max-w-prose">
            <h2 className="  md:text-xl text-l font-semibold    text-white  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-overlay">
              The Freaking Catalyst.
            </h2>
            <h1 className=" md:text-6xl text-4xl leading-tight font-bold text-white/80  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-overlay">
            Unleash Your Media Library with Infinite Storage.
            </h1>
          </div>
          <h3 className="md:text-xl text-l font-semibold   text-white/70  bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 mix-blend-overlay">
            I don't know why these crypto people like it.
          </h3>
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            initial={{ y: 20, opacity: 0 }}
            className="grid grid-cols-[auto,auto] md:justify-start justify-center gap-6 mt-8"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shreyaspapi/Catalyst"
            >
              <Image
                className="transition ease-in-out  hover:scale-105  duration-100 saturate-0 hover:saturate-100"
                width={100}
                height={20}
                alt="Github"
                src={Github}
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=7q7mAynYrRc&feature=youtu.be"
            >
              <Image
                className="transition ease-in-out  hover:scale-105  duration-100 saturate-0 hover:saturate-100"
                width={130}
                height={20}
                alt="Youtube"
                src={Youtube}
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/CMvEG6APxW"
            >
              <Image
                className="transition ease-in-out  hover:scale-105  duration-100 saturate-0 hover:saturate-100"
                width={100}
                height={30}
                alt="Discord"
                src={Discord}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Page
