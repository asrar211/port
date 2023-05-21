import SectionTitle from './Title';
import One from '../public/assets/images/one.png';
import Restaurant from '../public/assets/images/restaurant.jpg';
import Travel from '../public/assets/images/travel.jpg';
import Image from 'next/image';
import Title from './Title'
import { TbBrandGithub } from 'react-icons/tb';
import {RxOpenInNewWindow} from 'react-icons/rx';

const Project = () => {
  return (
    <section id='projects' className='maxx lgl:w-[1000px] dr py-20  xs:w-[250px] sm:w-[350px] sml:w-[475px] md:w-[600px] mdl:w-[650px]  dl:w-[650px]'>
        <Title titlen="My Projects" />

{/* Project one */}

        <div className='w-full flex flex-col items-center justify-center gap-28 pt-20'>
          <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
              <a className='w-full xl:w-1/2 h-auto relative group' href="https://code-dusky.vercel.app/">
                <div>
                  <Image className='w-full h-full object-contain' src={One} alt='One'/>
                </div>
              </a>
              <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10 '>
                <p className='font-fontTitle text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Cod Error Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    This Website is made out of scratch from ReactJs and Bootstrap namely CodError.
                </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>ReactJs</li>
                <li>Bootstrap</li>
                <li>Vercel Deploy</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a className='hover:text-textGreen duration:300'  href="https://www.github.com/asrar211">
                  <TbBrandGithub />
                </a>
                <a href="https://code-dusky.vercel.app/" className="hover:text-textGreen duration:300" >
                  <RxOpenInNewWindow />
                </a>
              </div>
              </div>
            </div>
          </div>
          </div>

          {/* Project two */}

          <div className='w-full flex flex-col items-center justify-center gap-28 pt-10'>
          <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6 justify-between'>
              <a className='w-full xl:w-1/2 h-auto relative group' href="">
                <div>
                  <Image className='w-full h-full object-contain' src={Travel} alt='travel planner Website'/>
                </div>
              </a>
              <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10 '>
                <p className='font-fontTitle text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Travel Planner</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, modi dicta voluptatibus odit dolores officia!
                </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>NextJs</li>
                <li>Typescript</li>
                <li>Github Deploy</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a className='hover:text-textGreen duration:300'  href="https://www.github.com/asrar211">
                  <TbBrandGithub />
                </a>
                <a href="" className="hover:text-textGreen duration:300" >
                  <RxOpenInNewWindow />
                </a>
              </div>
              </div>
            </div>
          </div>
          </div>

          {/* Project three */}

          <div className='w-full flex flex-col items-center justify-center gap-28 pt-10'>
          <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
              <a className='w-full xl:w-1/2 h-auto relative group' href="">
                <div>
                  <Image className='w-full h-full object-contain' src={Restaurant} alt='Restaurant Website'/>
                </div>
              </a>
              <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10 '>
                <p className='font-fontTitle text-textGreen text-sm tracking-wide'>Featured Project</p>
                <h3 className='text-2xl font-bold'>Restaurant Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, modi dicta voluptatibus odit dolores officia!
                </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>NextJs</li>
                <li>Typescript</li>
                <li>Github Deploy</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a className='hover:text-textGreen duration:300'  href="https://www.github.com/asrar211">
                  <TbBrandGithub />
                </a>
                <a href="" className="hover:text-textGreen duration:300" >
                  <RxOpenInNewWindow />
                </a>
              </div>
              </div>
            </div>
          </div>
          </div>
        </section>
  )
}

export default Project