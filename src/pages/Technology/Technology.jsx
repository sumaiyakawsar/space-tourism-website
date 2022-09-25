import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { technology } from "../../data/data";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabLink = "w-12 h-12  rounded-[50%] bg-white border border-white";
  const normalTabLink =
    "w-12 h-12 text-white rounded-[50%] gap-2 border border-white/[25%]  transition-colors duration-300 ease-linear hover:border-white";

  return (
    <main className=" bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop bg-no-repeat bg-cover bg-center w-full ">
      <Header />
      <div className="container mx-auto my-0 w-full lg:w-4/5 ">
        <h5 className="font-Barlow_C text-center sm:text-left uppercase text-base leading-[1.2rem] tracking-[0.16875rem] lg:text-[1.75rem] lg:leading-8 lg:tracking-[4.75px] text-white py-4">
          <span className="font-bold mr-7 opacity-25">03</span>
          SPACE LAUNCH 101
        </h5>

        <div className="flex  flex-col gap-8 lg:gap-20 items-center lg:flex-row lg:justify-around ">
          <div className="tabs font-Bellafair text-3xl flex lg:flex-col gap-4 order-2 lg:order-1">
            {technology.map(({ name }, id) => {
              return (
                <Link
                  to="/technology"
                  key={id + 1}
                  className={id === activeTab ? activeTabLink : normalTabLink}
                  // Change the active tab on click.
                  onClick={() => setActiveTab(id)}
                >
                  <span className="flex h-full justify-center items-center">
                    {id + 1}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex-1 order-3 lg:order-2 max-w-[28.625rem] ">
            <h5 className="font-Barlow_C text-white/50 uppercase text-center text-sm leading-4 tracking-[2.36px] md:text-base md:leading-[1.2rem] md:tracking-[2.7px] lg:text-left">
              THE TERMINOLOGY…
            </h5>
            <h1 className="font-Bellafair uppercase text-2xl text-center leading-7 lg:text-left md:text-[2.5rem] md:leading-[2.865rem] py-4 lg:text-[3.2rem] lg:leading-[4rem] text-white ">
              {technology[activeTab].name}
            </h1>
            <p
              className="font-Barlow  tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9] pb-24 lg:pb-0"
            >
              {technology[activeTab].description}
            </p>
          </div>
          <div className="flex-1 order-1 lg:order-3 w-full">
            <img
              src={technology[activeTab].images.portrait}
              alt=""
              className="hidden lg:flex lg:ml-32"
            />
            <img
              src={technology[activeTab].images.landscape}
              alt=""
              className="w-full lg:hidden"
            />
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
};

export default Technology;
