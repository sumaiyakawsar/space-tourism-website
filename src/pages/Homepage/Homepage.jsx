import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
 
const Homepage = () => {
  return (
    <main className=" bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-center w-full h-screen ">
      <Header />
      <div className="container mx-auto my-0   h-3/4 px-6  flex flex-col gap-20 items-center lg:items-end lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center lg:items-start gap-4 max-w-[28.125rem]">
          <h5 className="font-Barlow_C uppercase text-base leading-[1.2rem] tracking-[2.7px]  lg:text-[28px] lg:leading-8 lg:tracking-[4.75px] text-[#D0D6f9] ">
            So, you want to travel to
          </h5>
          <h1 className="font-Bellafair uppercase text-[5rem] leading-[6.25rem] tracking-normal  lg:text-[150px] lg:leading-[171px] text-white">
            Space
          </h1>
          <p
            className="font-Barlow  tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="">
          <h4 className="font-Bellafair uppercase text-[32px] bg-white flex items-center justify-center rounded-full w-[9.375rem] h-[9.375rem] transition-all duration-300 ease-linear  lg:w-[17.125rem] lg:h-[17.125rem] lg:hover:ring-[5.5rem] lg:hover:ring-white/10">
            Explore
          </h4>
        </div>
      </div>
         <Footer/>
  
    </main>
  );
};

export default Homepage;
