'use client';

import Footer from '../../components/Footer';
import Image from 'next/image';

export default function OurWork(){
    return(
            <div className="items-stretch bg-white flex flex-col">
              <div className='flex items-stretch justify-center z-[0]'>
                  <Image
                      src="/ourwork/Muda-de-andiroba-Selva-São-Joaquim.jpg"
                      width= {2000}
                      height={500}
                      priority={false}
                      className='overflow-hidden object-cover'
                      alt="Screenshots of the dashboard project showing desktop and mobile versions"
                      />
                       <div className="items-stretch flex w-[560px] max-w-full flex-col self-center absolute ">
                           <div className="text-white text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                             Developing impactful carbon offset projects for a sustainable future
                           </div>
                           <div className="text-white text-lg leading-7 mt-6 max-md:max-w-full">
                             Go Balance is a carbon offset project development company dedicated to
                             creating a positive impact on the environment. We work towards a
                             sustainable future by developing innovative and impactful carbon
                             offset projects.
                           </div>
                         </div>
                   </div>
              <div className="items-stretch bg-white flex w-full flex-col px-16 py-20 max-md:max-w-full max-md:px-5">
                <Footer />
              </div>
            </div>
          );
        }
        