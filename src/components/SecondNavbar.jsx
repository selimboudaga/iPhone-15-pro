import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const SecondNavbar = () => {

  return (
    <header id="nav" className=" fixed top-0 left-0 z-30 backdrop-blur-lg w-full py-3 sm:px-7 px-5 flex justify-between items-center border-b-[1px] bg-[#161616bd] border-[#6d6d6d]">
      <nav className=" items-baseline  justify-between flex w-[950px] mx-auto">
        <p className=" text-[21px] text-[#d6d6d6] font-semibold">
          iPhone 15 pro
        </p>
        <div className=" flex sm:w-[200px] justify-between">
          <p className=" text-[#d6d6d6] text-[14px] hover:text-white hidden sm:flex transition-all cursor-pointer ">
            Overview
          </p>
          <p className=" text-[#d6d6d6] text-[14px] hover:text-white hidden sm:flex transition-all cursor-pointer ">
            Tech specs
          </p>
          <button className=" bg-[#0077ED] rounded-full px-3 items-center text-[13px] py-[2px]">
            Buy
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SecondNavbar;
