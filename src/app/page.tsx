'use client';

import Button from './components/Button';
import Footer from './components/Footer';
import Image from 'next/image';


export default function App() {
 
  return (
    <div className="items-stretch bg-white flex flex-col">
      {/* hero-header-section */}
      <div className='flex items-stretch justify-center w-full '>
        <div className='overflow-hidden h-screen md:w-screen '>
         <video
             autoPlay={true}
             loop={true}
             controls={false}
             width="100%"
             height="100%"
             src="/home/forest-video.mp4"
             className='object-cover bg-fixed h-screen bg-cover'
            />
            </div>
               <div className="items-stretch flex md:w-[960px] max-w-full flex-col self-center absolute transition ease-in translate-y-8">
                 <div className="p-4 max-md:max-w-full">
                    <h1 className='text-white opacity-75 text-5xl md:text-7xl font-bold'>Developing impactful carbon offset projects for a sustainable future</h1>
                     <h2 className="text-white text-lg leading-7 mt-6 max-md:max-w-full">Go Balance is a carbon offset project development company dedicated to
                     creating a positive impact on the environment. We work towards a
                     sustainable future by developing innovative and impactful carbon
                     offset projects.</h2>
                </div>
            </div>
        </div>
     {/* future-section */} 

    <section className="items-center bg-white flex w-full flex-col px-5 py-12 max-md:max-w-full">
      <div className="w-full max-w-[1440px] mt-16 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                Taking Action Towards a Greener Future with Carbon Offset Projects
              </h1>
              <p className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                At Go Balance, we understand the importance of carbon offsetting in mitigating climate change. Through our innovative projects, we are actively contributing to a greener future for generations to come.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/home/free-photo-of-amazon-rainforest-in-birds-eye-view.jpeg"
              alt="Greener Future"
              className="aspect-[0.96] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              width={1000}
              height={960}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>

     {/* future-section */} 

     <section className="items-center bg-white flex w-full flex-col px-5 py-12 max-md:max-w-full">
      <div className="w-full max-w-[1440px] mt-16 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <Image
              width={1000}
              height={900}
              quality={100}
              loading="lazy"
              src="/home/amazon-basin.jpg"
              alt="Greener Future"
              className="aspect-[0.96] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                Taking Action Towards a Greener Future with Carbon Offset Projects
              </h1>
              <p className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                At Go Balance, we understand the importance of carbon offsetting in mitigating climate change. Through our innovative projects, we are actively contributing to a greener future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* about-section */}

    <div className="bg-black bg-opacity-50 flex justify-center w-full flex-col max-md:max-w-full max-md:px-0">
        <Image
            width={2000}
            height={900}
            quality={100}
            priority={false}
            object-fit="cover"
            alt='image'
            src="/home/pexels-photo-2519390.jpeg"
            className="object-cover mix-blend-darken w-full h-screen max-md:max-w-full"
            />
        <div className=" md:items-start items-center justify-center px-5 flex md:w-[900px] max-w-full flex-col md:ml-20 lg:ml-80 absolute">        
          <h1 className="text-white text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
             Medium length section heading goes here</h1>
            <p className="text-white text-lg leading-7 mt-6 max-md:max-w-full">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
             varius enim in eros elementum tristique. Duis cursus, mi quis viverra
             ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="items-stretch self-left flex gap-2 my-10">
            <Button />
            </div>
          </div>
    </div>
    
     {/* cards-news-section*/} 
      
    <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
      <div className="mb-0 w-full max-w-[1440px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div id="smooth-content" className="flex grow flex-col max-md:mt-10">
            <div className=' overflow-hidden w-full h-full'>
              <Image
                width={700}
                height={500}
                quality={100}
                priority={false}
                alt='image'
                src="/home/Geospatial-Map-Amazon-Go-Balance.jpg"
                className="box box-c aspect-[1.69] object-cover object-center w-full self-stretch overflow-hidden hover:scale-110 ease-in-out duration-500"
              />
              </div>
              <div className="items-stretch self-stretch flex flex-col mt-8">
              <div className="text-black text-2xl font-bold leading-8">
                <h3>Long heading is what you see here in this feature section</h3>
                 </div>
                   <div className="text-black text-base leading-6 mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse varius enim in eros elementum tristique. Duis
                     cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  </div>
              </div>
              <div className="justify-center items-stretch flex w-28 max-w-full gap-2 mt-8">
                 <Button/>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10 overflow-hidden">
            <div className=' overflow-hidden w-full h-full'>
             <Image
                 width={700}
                 height={500}
                 quality={100}
                 priority={false}
                 alt='image'
                 src="/home/calango-São-joaquim.jpg"
                 className="box box-c aspect-[1.69] object-cover object-center w-full self-stretch overflow-hidden hover:scale-110 ease-in-out duration-500"
                />
              </div>
            <div className="items-stretch self-stretch flex flex-col mt-8">
              <div className="text-black text-2xl font-bold leading-8">
                <h3>Long heading is what you see here in this feature section</h3>
                 </div>
                   <div className="text-black text-base leading-6 mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse varius enim in eros elementum tristique. Duis
                     cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                  </div>
                </div>
              <div className="justify-center items-stretch flex w-28 max-w-full gap-2 mt-8">
                <Button/>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
              <div className=' overflow-hidden w-full h-full'>
                <Image
                  width={700}
                  height={500}
                  quality={100}
                  priority={false}
                  src="/home/Stingless-Bee-Breeding-in-the-Trocano-Araretama-Project.jpeg"
                  alt='image'
                  className="box box-c aspect-[1.69] object-cover object-center w-full self-stretch overflow-hidden hover:scale-110 ease-in-out duration-500"
                />
                </div>
              <div className="items-stretch self-stretch flex flex-col mt-8">
            <div className="text-black text-2xl font-bold leading-8">
                  <h3>Long heading is what you see here in this feature section</h3>
              </div>
                <div className="text-black text-base leading-6 mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
              </div>
              <div className="justify-center items-stretch flex w-32 max-w-full gap-2 mt-8">
                 <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     {/* footer-section */} 

    <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
     <div className="items-stretch bg-white flex w-full flex-col max-w-[1440px] max-md:max-w-full max-md:px-5">
      <Footer />
        </div>
         </div>
           </div>
  ) 
 }

