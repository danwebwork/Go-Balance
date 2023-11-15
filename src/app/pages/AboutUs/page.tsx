'use client';


import Footer from '../../components/Footer';
import Image from 'next/image';
import {FaLinkedin } from "react-icons/fa6";
import {FaXTwitter } from "react-icons/fa6";
import ButtonLeft from "../../components/ButtonLeft"
import ButtonRight from "../../components/ButtonRight"

export default function Page(){
    return(

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
                     src="/aboutus/video (2160p) comp.mp4"
                     className='object-cover bg-fixed h-screen bg-cover'
                    />
                    </div>
                       <div className="items-stretch flex md:w-[960px] max-w-full flex-col self-center absolute transition ease-in translate-y-8">
                         <div className=" max-md:max-w-full px-4">
                            <h1 className='text-white opacity-75 text-5xl md:text-7xl font-bold'>Developing impactful carbon offset projects for a sustainable future</h1>
                             <h2 className="text-white text-lg leading-7 mt-6 max-md:max-w-full">
                              Go Balance is a carbon offset project development company dedicated to
                             creating a positive impact on the environment. We work towards a
                             sustainable future by developing innovative and impactful carbon
                             offset projects.</h2>
  
                        </div>
                    </div>
                </div>
        
              {/* features-list-section */}
               <section className="items-center bg-white flex w-full flex-col px-5 py-12 max-md:max-w-full">
                 <div className="w-full max-w-[1312px] mt-16 mb-10 max-md:max-w-full max-md:mt-10">
                   <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                     <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                       <Image
                         width={1000}
                         height={900}
                         quality={100}
                         alt="image"
                         loading="lazy"
                         src="/aboutus/pexels-photo-6793576.jpeg"
                         className="aspect-[0.96] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                       />
                     </div>
                     <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                       <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                         <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                           <div className="bg-black w-0.5 shrink-0 h-[130px]" />
                           <div className="justify-center items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                             <h2 className="text-black text-3xl font-bold leading-10 max-md:max-w-full">
                               Types of Projects
                             </h2>
                             <p className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                               Go Balance develops a variety of projects including reforestation, renewable
                               energy, and community-based initiatives. Each project is carefully designed to
                               have a positive impact on the environment and local communities.
                             </p>
                           </div>
                         </div>
                         <div className="flex flex-col items-stretch mt-10 pl-8 max-md:max-w-full max-md:pl-5">
                           <div className="justify-center items-stretch flex flex-col max-md:max-w-full">
                             <h2 className="text-black text-3xl font-bold leading-10 max-md:max-w-full">
                               Our Approach
                             </h2>
                             <p className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                               At Go Balance, we take a holistic approach to project development. We
                               prioritize sustainability, community engagement, and long-term impact in all our
                               endeavors.
                             </p>
                           </div>
                           <div className="justify-center items-stretch flex flex-col mt-10 max-md:max-w-full">
                             <h2 className="text-black text-3xl font-bold leading-10 max-md:max-w-full">
                               Environmental Focus
                             </h2>
                             <p className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                               Our projects focus on addressing key environmental challenges such as
                               deforestation, carbon emissions, and the transition to clean energy sources.
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
            
               {/* How-It-Works-Section */}
              <div className="items-center bg-white flex w-full flex-col px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-24">
                <div className="items-stretch self-center flex w-[768px] max-w-full flex-col mt-4">
                  <div className="text-black text-center text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    Developing and Managing Carbon Offset Projects
                  </div>
                  <div className="text-black text-center text-lg leading-7 mt-6 max-md:max-w-full">
                    At Go Balance, we follow a comprehensive process to develop and
                    manage carbon offset projects. Our team of experts ensures that each
                    project is designed to have a positive impact on the environment and
                    contribute to the reduction of greenhouse gas emissions.
                  </div>
                </div>
                <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="items-center flex flex-col max-md:mt-10">
                        <Image
                          width={100}
                          height={100}
                          alt='icon'
                          src="/icons/data-source01.png"
                          className="aspect-square object-contain object-center overflow-hidden max-w-full"
                        />
                        <div className="self-stretch text-black text-center text-3xl font-bold leading-10 mt-6">
                          Project Development
                        </div>
                        <div className="self-stretch text-black text-center text-base leading-6 mt-6">
                          We identify potential carbon offset projects and assess their
                          feasibility and environmental benefits.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col max-md:mt-10">
                        <Image
                            width={100}
                            height={100}
                            alt='icon'
                            src="/icons/project.png"
                            className=" object-cover object-center overflow-hidden max-w-full"
                          />
                        <div className="self-stretch text-black text-center text-3xl font-bold leading-10 mt-6">
                          Project Implementation
                        </div>
                        <div className="self-stretch text-black text-center text-base leading-6 mt-6">
                          Once a project is approved, we work diligently to implement
                          it, ensuring all necessary measures are taken to achieve the
                          desired outcomes.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col max-md:mt-10">
                          <Image
                            width={100}
                            height={100}
                            alt='icon'
                            src="/icons/green01.png"
                            className="aspect-square object-contain object-center overflow-hidden max-w-full"
                          />
                        <div className="self-stretch text-black text-center text-3xl font-bold leading-10 mt-6">
                          Monitoring and Verification
                        </div>
                        <div className="self-stretch text-black text-center text-base leading-6 mt-6">
                          We continuously monitor and verify the progress and impact of
                          our carbon offset projects to ensure their effectiveness.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* team-section */}
              <section className="items-start bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">

               <div className="items-stretch flex w-[768px] max-w-full flex-col mt-4 self-start">
                 <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                   Meet Our Team
                 </div>
                 <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                   Get to know the experts behind Go Balance
                 </div>
               </div>
               <div className="items-stretch self-stretch flex flex-col mt-20 max-md:max-w-full max-md:mt-10">
                 <div className="max-md:max-w-full">
                   <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                     <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                       <div className="flex grow flex-col max-md:mt-10">
                        <div className=' w-[50%] h-[60%]'>
                           <Image
                             width={300}
                             height={300}
                             quality={100}
                             alt='team-image'
                             loading="lazy"
                             src="/aboutus/team/Ciaran_edited.png"
                             className=" object-cover object-center overflow-hidden shrink-0 flex-1 rounded-full"
                           />
                           </div>
                         <div className="items-stretch self-stretch flex flex-col mt-6">
                           <div className="text-black text-xl font-semibold leading-8">
                             <h4>Ciaran Kelly</h4>
                           </div>
                           <div className="text-black text-lg leading-7">Chief Executive Officer</div>
                         </div>
                         <div className="self-stretch text-black text-base leading-6 mt-4">
                           <p>John Doe is a visionary leader with extensive experience in
                           sustainability projects.</p>
                         </div>
                         <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6 max-md:justify-center">
                           <FaLinkedin
                             className="text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                           <FaXTwitter
                             className=" text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                         </div>
                       </div>
                     </div>
                     <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                       <div className="flex grow flex-col max-md:mt-10">
                          <div className=' w-[50%] h-[60%]'>
                            <Image
                             width={300}
                             height={300}
                             quality={100}
                             alt='team-image'
                             loading="lazy"
                             src="/aboutus/team/Jamie_edited_edited.png"
                             className="aspect-square object-cover object-center w-100 overflow-hidden shrink-0 flex-1 rounded-full"
                            />
                           </div>
                         <div className="items-stretch self-stretch flex flex-col mt-6">
                           <div className="text-black text-xl font-semibold leading-8">
                             <h4>Jamie Robinson</h4>
                           </div>
                           <div className="text-black text-lg leading-7"><p>Head of Capital Market</p></div>
                         </div>
                         <div className="self-stretch text-black text-base leading-6 mt-4">
                           <p>Jane Smith oversees the operational aspects of Go Balance,
                           ensuring smooth project execution.</p>
                         </div>
                         <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6 max-md:justify-center">
                           <FaLinkedin
                             className="text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                           <FaXTwitter
                             className=" text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                         </div>
                       </div>
                     </div>
                     <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                       <div className="flex grow flex-col max-md:mt-10">
                          <div className=' w-[50%] h-[60%]'>
                            <Image
                             width={300}
                             height={300}
                             quality={100}
                             alt='team-image' 
                             loading="lazy"
                             src="/aboutus/team/Barry_edited.png"
                             className="aspect-square object-cover object-center w-full overflow-hidden shrink-0 flex-1 rounded-full"
                            />
                           </div>
                         <div className="items-stretch self-stretch flex flex-col mt-6">
                           <div className="text-black text-xl font-semibold leading-8">
                             <h4>Barry MacCarthy</h4>
                           </div>
                           <div className="text-black text-lg leading-7"><p>Chief Operation Officer</p></div>
                         </div>
                         <div className="self-stretch text-black text-base leading-6 mt-4">
                           <p>Michael Johnson leads the technological advancements at Go
                           Balance, driving innovation.</p>
                         </div>
                         <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6 max-md:justify-center">                          
                           <FaLinkedin
                             className="text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                           <FaXTwitter
                             className=" text-black text-2xl aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                           />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="justify-between items-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                   <div className="items-stretch flex gap-2 my-auto max-md:justify-center">
                     <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                     <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                     <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                     <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                     <div className="flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                   </div>
                   <div className="items-stretch self-stretch flex justify-between gap-4">
                      <ButtonLeft/>
                      <ButtonRight/>
                   </div>
                  </div>
                </div>
              </section>

              {/* cta-section */}
              <div className="bg-white flex w-full flex-col pl-16 pr-20 py-28 max-md:max-w-full max-md:px-5 max-md:py-24">
                <div className="items-stretch flex w-[768px] max-w-full flex-col">
                  <div className="text-black text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    Discover Our Impactful Sustainability Projects
                  </div>
                  <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                    Learn how our carbon offset projects are making a difference in the
                    world.
                  </div>
                </div>
                <div className="items-stretch flex mb-0 w-[249px] max-w-full gap-4 mt-10 max-md:mb-2.5">
                  <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border bg-black grow px-5 py-3 border-solid border-black">
                    Learn More
                  </div>
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border grow px-5 py-3 border-solid border-black">
                    Contact
                  </div>
                </div>
              </div>

              {/* footer-section */}
              <div className="items-stretch bg-white flex w-full flex-col px-16 py-20 max-md:max-w-full max-md:px-5">
                <Footer />
              </div>
            </div>
          );
        }
        
        
        
  