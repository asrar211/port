interface Props {
  titlen:string;
}

const Title: React.FunctionComponent<Props> = ({ titlen, }) => {
  return (
    <div><h2 className='m-4 font-titleFont text-2xl font-semibold flex items-center'>
        {titlen} <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6'></span>
        </h2></div>
  )
}

export default Title