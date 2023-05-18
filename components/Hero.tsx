import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="max-w-contentContainer mx-auto px-7 py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">

        <motion.h3
        initial={{y:10, opacity: 0 }}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        className="text-2xl font-titleFont tracking-wide text-textGreen">Hello, I am </motion.h3>
        <motion.h1
        initial={{y:10, opacity: 0 }}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className="text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col"
        >Mohammad Asrar. <span className="text-textDark mt-2 lgl:mt-4">Web Developer and Designer</span>
        </motion.h1>
        <motion.p
        initial={{y:10, opacity: 0 }}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
        className="text-base md:max-w-[650px] text-textDark font-medium xl:w-[800px]">
            {""} I am a Web Developer with 1+years of experience in front-end and back-end technologies. I have a strong foundation in front-end and back-end development having skills in creating and developing user-friendly and responsive web applications using various technologies like ReactJs, NodeJs, NextJs and much more...
            {""}
        </motion.p>
        <motion.button
        initial={{y:10, opacity: 0 }}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        className="w-40 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">Hire Me!</motion.button>
    </div>
  )
}

export default Hero