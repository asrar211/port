import Image from 'next/image';
import Photo from "../public/assets/images/photo.svg";
import { motion } from 'framer-motion';

const SideTwo = () => {
  return (
    <motion.div 
    initial={{y:10, opacity: 0 }}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 1.5}}
    className='flex items-center'>
        <Image className='w-50  ' src={Photo} alt="photo" />
    </motion.div>

  )
}

export default SideTwo