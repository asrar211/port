

const Contact = () => {
  return (
    <section id="contact" className='lg:w-[1000px] mx-auto py-20lk xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide ">Contact Me</p>
        <h2 className="font-titleFont text-4xl font-semibold">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-textDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum natus cumque tempore nam odit quod culpa consectetur ipsum harum quo!</p>
        <a href="mailto:aliasrar84@gmail.com"><button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration:300">Drop a Message</button></a>
        </section>
  )
}

export default Contact