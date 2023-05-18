import Title from './Title'
import {DiJavascript, DiReact, DiNodejsSmall, DiBootstrap,DiMongodb  } from 'react-icons/di';
import {TbBrandNextjs, } from 'react-icons/tb';
import {SiJquery} from 'react-icons/si';
import Image from 'next/image';
import {Man} from '../public/assets/images/index'

const About = () => {
  return (
    <div id="about" className="max-w-containerSmall dr py-10 lgl:py-32 flex flex-col gap-8">
        <Title titlen="About" />
        <div className='flex flex-col lgl:flex-grow gap-16'>
          <div className='w-full text-base text-textDark font-medium flex flex-col gap-4'>
            <p>
              Hello! My name is Mohammad Asrar and I am Web Developer and Designer. I have experience in many latest technologies started back from HTML, CSS and JavaScript. I have done various projects which you can see below. Apart from web development, i am currently working on Artficial Intelligence, Machine Learning and Cybersecurity.
              </p>
              <p>
                Last Year i had a privilege to work with a startup,
                <span className='text-textGreen'>called Proton Techs.</span>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quia aut iusto quas adipisci saepe tenetur consequatur eius! Quis, ipsa.</p>
            <p>Here are some Technologies i have been working with:</p>
            <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
              <li className='flex items-center gap-2'><span className='text-textGreen'><DiJavascript /></span>Javascript</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><DiReact /></span>ReactJs</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><DiNodejsSmall /></span>NodeJs</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><TbBrandNextjs /></span>NextJs</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><DiBootstrap /></span>Bootstrap</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><DiMongodb /></span>MongoDB</li>
              <li className='flex items-center gap-2'><span className='text-textGreen'><SiJquery /></span>jQuery</li>
            </ul>
          </div>
        </div>
        </div>
  )
}

export default About