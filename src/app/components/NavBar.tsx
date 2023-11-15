import LogoMenu from "./LogoMenu";
import NavLinks from "./nav-links";

export default function NavBar(){   
    return(
        <nav className=" flex w-[200px] h-full md:w-full lg:justify-center md:justify-end md:h-[80px] ">
          <div className=" hidden md:flex lg:mr-[60%] md:mr-[80%] mr-[80%]">
            <LogoMenu/>
            </div>
            <div className="md:flex absolute items-center">
           <NavLinks />
         </div>
       </nav>
    );
}


