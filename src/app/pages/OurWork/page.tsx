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
              
              <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
                <div className="mb-0 w-full max-w-[1312px] max-md:max-w-full max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                          Long heading is what you see here in this feature section
                        </div>
                        <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique. Duis
                          cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                          commodo diam libero vitae erat.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ebc58f-c22b-4457-8e54-7848c1021b91?apiKey=19bec41ad166455e97401c139e8bd291&"
                        className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white flex w-full flex-col px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-24">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="self-stretch text-black text-4xl font-bold leading-10 max-md:max-w-full max-md:mt-10">
                        Protecting Forests and Communities through Nature-Based
                        Solutions
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="self-stretch text-black text-lg leading-7 max-md:max-w-full max-md:mt-10">
                        Go Balance is a carbon offset project development company
                        focused on developing and managing nature-based REDD+ projects
                        under the Natural Forest Standard. Our projects aim to protect
                        areas of forest at risk of deforestation, preserving forest
                        ecosystems and biodiversity while also benefiting local
                        communities. With the REDD+ approach, we not only reduce carbon
                        emissions but also bring additional co-benefits to the
                        environment and communities.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-0 flex-col items-center mt-20 px-5 py-72 max-md:max-w-full max-md:mt-10 max-md:mb-2.5 max-md:py-24">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d415e282-6d88-4687-b717-7b7c3cea145d?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.25] object-contain object-center w-[200px] overflow-hidden mb-0 max-w-full max-md:mb-2.5"
                  />
                </div>
              </div>
              <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
                <div className="mb-0 w-full max-w-[1312px] max-md:max-w-full max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-black text-base font-semibold leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                          Sustainable
                        </div>
                        <div className="self-stretch text-black text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
                          Developing Carbon Offset Projects for a Greener Future
                        </div>
                        <div className="items-stretch flex w-60 max-w-full justify-between gap-5 mt-12 max-md:mt-10">
                          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border grow px-5 py-3 border-solid border-black">
                            Learn More
                          </div>
                          <div className="justify-center items-stretch self-center flex gap-2 my-auto">
                            <div className="text-black text-base leading-6">
                              Sign Up
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce4f384-5e46-4cac-90fe-97acc1566370?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex basis-[0%] flex-col">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d5751be-15ae-4f10-ae8a-75a592f3cefa?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-12 overflow-hidden"
                            />
                            <div className="bg-black self-center w-0.5 shrink-0 h-[100px] mt-4" />
                          </div>
                          <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
                            <div className="text-black text-xl font-bold leading-7 max-md:max-w-full">
                              Identify Projects
                            </div>
                            <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                              We carefully research and select carbon offset projects
                              that have a positive impact.
                            </div>
                          </div>
                        </div>
                        <div className="items-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex basis-[0%] flex-col">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67d93c4e-fbb7-4497-b513-c3dcd1f2fe03?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-12 overflow-hidden"
                            />
                            <div className="bg-black self-center w-0.5 shrink-0 h-[100px] mt-4" />
                          </div>
                          <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
                            <div className="text-black text-xl font-bold leading-7 max-md:max-w-full">
                              Develop Projects
                            </div>
                            <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                              Our team works closely with partners to develop and
                              implement carbon offset projects.
                            </div>
                          </div>
                        </div>
                        <div className="items-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex basis-[0%] flex-col">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98ca6bf-001f-4f5b-8aba-a76d2bf3814a?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-12 overflow-hidden"
                            />
                            <div className="bg-black self-center w-0.5 shrink-0 h-[100px] mt-4" />
                          </div>
                          <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
                            <div className="text-black text-xl font-bold leading-7 max-md:max-w-full">
                              Manage Projects
                            </div>
                            <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                              We ensure ongoing monitoring and management of carbon
                              offset projects for maximum effectiveness.
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2039cf2e-7a45-435c-9fdc-3a96eb330bbc?apiKey=19bec41ad166455e97401c139e8bd291&"
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                            <div className="text-black text-xl font-bold leading-7 max-md:max-w-full">
                              Measure Impact
                            </div>
                            <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                              We track and report the environmental impact of our carbon
                              offset projects.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
                <div className="mb-0 w-full max-w-[1312px] max-md:max-w-full max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bccb35e8-771a-4b9f-a2be-25b654aeae9f?apiKey=19bec41ad166455e97401c139e8bd291&"
                        className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch self-stretch flex flex-col max-md:max-w-full">
                          <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap max-md:max-w-full">
                            Sustainable
                          </div>
                          <div className="text-black text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
                            Case Study: Carbon Offset Project Success
                          </div>
                          <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                            Discover how our carbon offset project made a significant
                            impact on reducing emissions.
                          </div>
                        </div>
                        <div className="self-stretch mt-10 max-md:max-w-full">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                              <div className="items-stretch flex grow flex-col max-md:mt-6">
                                <div className="text-black text-xl font-bold leading-7">
                                  Project Overview
                                </div>
                                <div className="text-black text-base leading-6 mt-4">
                                  Learn about the innovative strategies we implemented
                                  to achieve carbon neutrality.
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                              <div className="items-stretch flex flex-col max-md:mt-6">
                                <div className="text-black text-xl font-bold leading-7">
                                  Results Achieved
                                </div>
                                <div className="text-black text-base leading-6 mt-4">
                                  Explore the positive environmental outcomes our
                                  project has generated.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-stretch flex w-60 max-w-full justify-between gap-5 mt-12 max-md:mt-10">
                          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border grow px-5 py-3 border-solid border-black">
                            Learn More
                          </div>
                          <div className="justify-center items-stretch self-center flex gap-2 my-auto">
                            <div className="text-black text-base leading-6">
                              Sign Up
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b69ecab0-bc25-43cb-b890-e254d2ae8540?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
                <div className="mb-0 w-full max-w-[1312px] max-md:max-w-full max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch self-stretch flex flex-col max-md:max-w-full">
                          <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap max-md:max-w-full">
                            Impact
                          </div>
                          <div className="text-black text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
                            Making a Difference in Carbon Reduction
                          </div>
                          <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                            Our projects have had a significant impact on carbon
                            reduction, contributing to a greener future for all. Through
                            our innovative solutions, we are making a real difference in
                            the fight against climate change.
                          </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex grow basis-[0%] flex-col">
                            <div className="text-black text-5xl font-bold leading-[57.6px] max-md:text-4xl">
                              50%
                            </div>
                            <div className="text-black text-base leading-6 mt-2">
                              Reduction in Carbon Emissions
                            </div>
                          </div>
                          <div className="items-stretch flex grow basis-[0%] flex-col">
                            <div className="text-black text-5xl font-bold leading-[57.6px] max-md:text-4xl">
                              50%
                            </div>
                            <div className="text-black text-base leading-6 mt-2">
                              Increase in Renewable Energy Adoption
                            </div>
                          </div>
                        </div>
                        <div className="items-stretch flex w-60 max-w-full justify-between gap-5 mt-12 max-md:mt-10">
                          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border grow px-5 py-3 border-solid border-black">
                            Learn More
                          </div>
                          <div className="justify-center items-stretch self-center flex gap-2 my-auto">
                            <div className="text-black text-base leading-6">
                              Sign Up
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f43c95f3-7cf1-42bd-b79e-e0a8efc9dcd8?apiKey=19bec41ad166455e97401c139e8bd291&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-center w-full mx-auto px-5 py-64 max-md:max-w-full max-md:mt-10 max-md:py-24">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9ceea12-c1c4-4c72-bc5d-196ce77c6ee0?apiKey=19bec41ad166455e97401c139e8bd291&"
                          className="aspect-[1.24] object-contain object-center w-32 overflow-hidden mb-0 max-w-full max-md:mb-2.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center bg-white flex w-full flex-col px-20 py-28 max-md:max-w-full max-md:px-5 max-md:py-24">
                <div className="items-stretch flex w-[116px] max-w-full gap-1 max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f95bd51-bf80-49ef-b804-57cc8b59b611?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeea4f4a-90d7-41a3-b582-39047c2f734e?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a72ed9-ee82-49f1-9aa1-2f918afe42d7?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c198f35e-c6af-4d59-82f6-ca23fb537cfc?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd63559-fe69-48c2-95f1-d3b5c0623c19?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </div>
                <div className="text-black text-center text-2xl font-bold leading-8 max-w-screen-md mt-8 max-md:max-w-full">
                  Go Balance's projects have had a tremendous impact on the communities
                  and organizations involved. Their commitment to carbon offsetting has
                  made a real difference in the fight against climate change.
                </div>{" "}
                <div className="items-start flex mb-0 w-[376px] max-w-full gap-5 mt-8 max-md:justify-center max-md:mb-2.5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca0ff81b-e567-461c-8da4-c2c81dc0255d?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden self-center shrink-0 max-w-full my-auto rounded-[50%]"
                  />{" "}
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
                      John Doe
                    </div>{" "}
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      CEO, ABC Company
                    </div>
                  </div>{" "}
                  <div className="bg-black self-stretch w-px shrink-0 h-[61px]" />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f754618-29f6-435c-9a1f-9e6769934773?apiKey=19bec41ad166455e97401c139e8bd291&"
                    className="aspect-[2.5] object-contain object-center w-[120px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>{" "}
              <div className="items-center bg-white flex w-full flex-col px-5 py-28 max-md:max-w-full max-md:py-24">
                <div className="mb-0 w-full max-w-[1312px] max-md:max-w-full max-md:mb-2.5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <div className="self-stretch text-black text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                          Join the Carbon Offset Movement
                        </div>{" "}
                        <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                          Discover how you can make a positive impact on the environment
                          by participating in carbon offset projects.
                        </div>{" "}
                        <div className="items-stretch flex w-[248px] max-w-full gap-4 mt-10">
                          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border bg-black grow px-5 py-3 border-solid border-black">
                            Learn More
                          </div>{" "}
                          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border grow px-5 py-3 border-solid border-black">
                            Sign Up
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61ebef76-e6e9-4a50-9328-57a357601bab?apiKey=19bec41ad166455e97401c139e8bd291&"
                        className="aspect-[1.54] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white flex w-full flex-col px-16 py-20 max-md:max-w-full max-md:px-5">
                <Footer />
              </div>
            </div>
          );
        }
        