
import FooterLogo from "./FooterLogo";
import {FaLinkedin } from "react-icons/fa6";
import {FaXTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
     
    <>
      <div className="md:max-w-full">
        <div className="gap-1 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center md:items-stretch w-[59%] max-md:w-full md:ml-10">          
              <FooterLogo />         
          </div>
          <div className="flex flex-col items-stretch md:w-[40%] max-md:w-full md:mr-10">
            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-black text-base font-semibold leading-6 max-md:max-w-full">
                Subscribe
              </div>
              <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                Join our community to receive updates and exclusive offers.
              </div>
              <div className="items-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-600 text-base leading-6 items-stretch border bg-white grow p-3 border-solid border-black">
                  Placeholder
                </div>
                <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-center border px-5 py-3 border-solid border-black">
                  Button
                </div>
              </div>
              <div className="text-black text-xs leading-5 mt-4 max-md:max-w-full">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex shrink-0 h-px flex-col mt-24 max-md:max-w-full max-md:mt-10" />
      <div className="justify-between flex w-full gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-sm leading-5 grow shrink basis-auto">
            © 2023 Go Balance. All rights reserved.
          </div>
          <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
            <div className="text-black text-sm leading-5 underline">
              Privacy Policy
            </div>
            <div className="text-black text-sm leading-5 underline">
              Terms of Service
            </div>
            <div className="text-black text-sm leading-5 underline whitespace-nowrap">
              Cookies Settings
            </div>
          </div>
        </div>
        <div className="items-center self-stretch flex gap-3 max-md:justify-center">
          <FaLinkedin className="text-black text-2xl"/>
          <FaXTwitter  className="text-black text-2xl"/>       
        </div>
      </div>
      </>
    )
}