import { ArrowRightIcon} from '@heroicons/react/24/solid'


export default function Button(){   
    return(
    <button className="flex items-center rounded-full justify-center text-black text-base leading-6 w-20 h-20 border bg-gray-200 hover:transition ease-in-out duration-500 hover:bg-green-300 hover:text-white">
      <ArrowRightIcon
        className="w-7 duration-300 hover:translate-x-1"
      />
    </button>

    );
}
