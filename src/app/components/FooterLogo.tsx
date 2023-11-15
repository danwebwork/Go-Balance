import Image from "next/image";


export default function Logo(){   
    return(
    <div className=" w-60">
      <Image
        width={50}
        height={50}
        alt='image'
        loading="lazy"
        object-fit="cover"
        src="/icons/Go-Balance-Logo-High.svg"
        className=" w-60 object-cover  object-center" 
      />
    </div>

    );
}
