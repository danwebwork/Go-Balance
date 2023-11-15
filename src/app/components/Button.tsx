import { ArrowDownRightIcon } from '@heroicons/react/24/solid'


export default function Button(){   
    return(
    <button className="flex items-center justify-center text-black text-base leading-6 rounded-2xl w-32 h-10 border bg-white hover:transition ease-in-out duration-500 hover:bg-black hover:text-white">
      <p className=' flex items-center text-sm'>Read More</p>
      <ArrowDownRightIcon
        className="w-5 hover:-rotate-45 duration-300 hover:translate-x-1"
      />
    </button>

    );
}
