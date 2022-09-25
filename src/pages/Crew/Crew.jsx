import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { crew } from "../../data/data";

const Crew = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabLink =
    "mx-2 w-[0.93rem] h-[0.93rem] rounded-full  bg-white  border transition-colors duration-300 bg-white   ";
  const normalTabLink =
    "mx-2 w-[0.93rem] h-[0.93rem] rounded-full  bg-white opacity-[17.44%] border ease-in transition-colors duration-300 border-transparent hover:opacity-50";

  return (
    <main className=" bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover bg-center w-full ">
      <Header />
      <div className="container mx-auto my-0 w-4/5 pb-[6.25rem] sm:pb-0">
        <h5 className="font-Barlow_C text-center sm:text-left uppercase text-base leading-[1.2rem] tracking-[0.16875rem] lg:text-[1.75rem] lg:leading-8 lg:tracking-[4.75px] text-white py-4 ease-in transition-colors duration-300">
          <span className="font-bold mr-7 opacity-25">02</span>
          Meet your crew
        </h5>

        <div className="flex flex-col gap-0 items-center lg:flex-row lg:justify-around">
          <div className="flex flex-col items-center lg:items-start gap-4 flex-1 max-w-[28.625rem]   order-2  sm:order-1  ">
            <div className="order-2 sm:order-1  ">
              <h5 className="font-Bellafair uppercase text-center lg:text-left text-base leading-[1.14625rem]  md:text-2xl md:leading-[1.70rem] lg:text-[2rem] lg:leading-9 ease-in transition-colors duration-300 pb-2 text-white/50 ">
                {crew[activeTab].role}
              </h5>
              <h1 className="font-Bellafair uppercase text-center lg:text-left text-2xl leading-7 md:text-[2.5rem] md:leading-[2.865rem] ease-in transition-colors duration-300 lg:text-[3.5rem] lg:leading-[4rem] text-white pb-4">
                {crew[activeTab].name}
              </h1>
              <p
                className="font-Barlow ease-in transition-colors duration-300 tracking-normal text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
              >
                {crew[activeTab].bio}
              </p>
            </div>

            <div className="tabs flex order-1 sm:order-2 py-8 md:py-10  ">
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

          <div className="flex-1 order-1 sm:order-2  ">
            <img
              src={crew[activeTab].images.webp}
              alt={crew[activeTab].name}
              className="px-12    "
            />
            <hr className="border-[#383B4B] lg:hidden" />
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Crew;
