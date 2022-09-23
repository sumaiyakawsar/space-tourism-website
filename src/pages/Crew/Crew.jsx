import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { crew } from "../../data/data";

const Crew = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabLink =
    "mx-2 w-[0.93rem] h-[0.93rem] rounded-full  bg-white  border transition-colors duration-300 bg-white   ";
  const normalTabLink =
    "mx-2 w-[0.93rem] h-[0.93rem] rounded-full  bg-white opacity-[17.44%] border transition-colors duration-300 border-transparent hover:opacity-50";

  return (
    <main
      className=" bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover bg-center w-full h-screen
   "
    >
      <Header />
      <div className="container mx-auto my-0 w-4/5  ">
        <h5 className="font-Barlow_C uppercase text-base leading-[1.2rem] tracking-[2.7px]  lg:text-[28px] lg:leading-8 lg:tracking-[4.75px] text-white pt-4">
          <span className="font-bold mr-7 opacity-25">02</span>
          Meet your crew
        </h5>

        <div className="flex flex-col  items-center lg:flex-row lg:justify-around  ">
          <div className="flex flex-col items-center lg:items-start gap-4  flex-1 ">
            <h5 className="font-Bellafair uppercase text-base leading-[1.2rem] tracking-[2.7px]  lg:text-[2rem] lg:leading-9 lg:tracking-normal text-white/50 ">
              {crew[activeTab].role}
            </h5>
            <h1 className="font-Bellafair uppercase text-[5rem] leading-[6.25rem] tracking-normal  lg:text-[3.5rem] lg:leading-[4rem] text-white">
              {crew[activeTab].name}
            </h1>
            <p
              className="font-Barlow  tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
            >
              {crew[activeTab].bio}
            </p>

            <div className="tabs flex ">
              {crew.map(({ name }, id) => {
                return (
                  <Link
                    to={`/crew`}
                    key={id + 1}
                    className={id === activeTab ? activeTabLink : normalTabLink}
                    // Change the active tab on click.
                    onClick={() => setActiveTab(id)}
                  ></Link>
                );
              })}
            </div>
          </div>

          <div className="flex-1 	border border-red-700">
            <img
              src={crew[activeTab].images.webp}
              alt={crew[activeTab].name}
              className="p-12 border border-green-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
