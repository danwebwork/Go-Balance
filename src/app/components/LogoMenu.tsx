import Image from 'next/image';

export default function LogoMenu() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image 
        width={80}
        height={80}
        quality={100}
        src="/icons/go-balance-menu-logo2.svg"
        alt='logo'
        className="bg-auto object-cover" 
      />
      <p className="md:text-[20px] sm:text-[20px]">Go Balance</p>
    </div>
  );
}
