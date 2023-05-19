import { TbBrandGithub } from "react-icons/tb";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className=" flex flex-col">
        <div className="hidden mdl:inline-flex xl:inline-flex items-center justify-center md:w-[630px] lg:w-[999px] py-6 gap-4">
        <a href="https://www.github.com/asrar211" target="_blank">
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub/></span>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-asrar-bhat-4a897b18b" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin/></span>
        </a>
        <a href="https://www.instagram.com/_asrar_ali" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram/></span>
        </a>
        <a href="https://www.facebook.com/aliasrar2" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook/></span>
        </a>
        </div>
        <div className="md:w-[630px] lg:w-[999px] py-6 text-center">
    Copyright, 2023 
  </div>
    </div>
    
    
  )
}

export default Footer