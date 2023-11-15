import { ArrowLeftIcon} from '@heroicons/react/24/solid'


export default function Button(){   
    return(
    <button className="flex items-center rounded-full justify-center text-black text-base leading-6 w-20 h-20 border bg-gray-200 hover:transition ease-in-out duration-500 hover:bg-black hover:text-white">
      <ArrowLeftIcon
        className="w-5 text-bold duration-300 hover:-translate-x-1"
      />
    </button>

    );
}
