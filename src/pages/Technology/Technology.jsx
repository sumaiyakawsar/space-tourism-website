import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { technology } from "../../data/data";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabLink = "w-12 h-12  rounded-[50%] bg-white border border-white";
  const normalTabLink =
    "w-12 h-12 text-white rounded-[50%] gap-2 border border-white/[25%]  transition-colors duration-300 ease-linear hover:border-white";

  return (
    <main className=" bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop bg-no-repeat bg-cover bg-center w-full h-screen">
      <Header />
      <div className="container mx-auto my-0 h-4/5 w-4/5">
        <h5 className="font-Barlow_C uppercase text-base leading-[1.2rem] tracking-[2.7px]  lg:text-[28px] lg:leading-8 lg:tracking-[4.75px] text-white pt-4">
          <span className="font-bold mr-7 opacity-25">03</span>
          SPACE LAUNCH 101
        </h5>

        <div className="flex  flex-col gap-20 items-center lg:flex-row lg:justify-around">
          <div className="tabs font-Bellafair text-3xl flex flex-col gap-4">
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
          <div className="flex-1">
            <h5 className="font-Bellafair uppercase text-base leading-[1.2rem] tracking-[2.7px]  lg:text-[2rem] lg:leading-9 lg:tracking-normal text-white/50 ">
              THE TERMINOLOGY…
            </h5>
            <h1 className="font-Bellafair uppercase text-[5rem] leading-[6.25rem] tracking-normal  lg:text-[3.5rem] lg:leading-[4rem] text-white">
              {technology[activeTab].name}
            </h1>
            <p
              className="font-Barlow  tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
            >
              {technology[activeTab].description}
            </p>
          </div>
          <div className="flex-1">
            <img src={technology[activeTab].images.portrait} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
