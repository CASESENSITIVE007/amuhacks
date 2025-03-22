import Link from "next/link";
import Image from "next/image";
import logo from "./images/a.png";
import amulogo from "./images/Amu-logo.png";

function Navbar() {
  return (

      <div className=" mx-auto flex opacity-90  bg-black/70 items-center justify-between md:justify-around h-28 ">
       <div className="  flex items-center ">  
          <Image src={amulogo} alt="Logo" className="   h-20 w-20   " />
        
        </div>
        <nav className=" ml-16" >
          <ul className="flex  space-x-4">
            <li>
              <Link href="#about"  className=" cursor-pointer text-white text-2xl font-serif  hover:underline  ">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#themes"  className=" cursor-pointer text-white text-2xl font-serif hover:underline   ">
                THEMES
              </Link>
            </li>
            <li>
              <Link href="#timeline"   className=" cursor-pointer text-white text-2xl font-serif hover:underline   ">
                TIMELINE
              </Link>
            </li>
            <li>
              <Link href="#prize" className="cursor-pointer text-white text-2xl font-serif hover:underline  ">
              PRIZES
              </Link>
            </li>
            <li>
              <Link href="#team" className="cursor-pointer text-white text-2xl font-serif hover:underline  ">
                TEAM
              </Link>
            </li>
           
     
         
          
          
           
         
          </ul>
        </nav>
        <div className="  flex items-center ">  
          <Image src={logo} alt="Logo" className="   h-20 w-20   " />
        
        </div>
      </div>
  
  );
}

export default Navbar;
