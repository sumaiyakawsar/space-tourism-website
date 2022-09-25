import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { destinations } from "../../data/data";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);

  // const { name } = useParams();
  const activeTabLink =
    "font-Barlow_C text-base py-2 mx-2 uppercase text-white tracking-[0.16875rem]  border-b-2 border-white";
  const normalTabLink =
    "font-Barlow_C text-base tracking-[0.16875rem] py-2 mx-2  text-[#D0D6F9] transition-all duration-300 ease-in hover:border-b-2 uppercase hover:border-white/50";

  return (
    <main className=" bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover bg-center w-full">
      <Header />
      <div className="container  mx-auto my-0  w-4/5">
        <h5 className="font-Barlow_C text-center sm:text-left uppercase text-base leading-[1.2rem] tracking-[0.16875rem]  lg:text-[1.75rem] lg:leading-8 lg:tracking-[4.75px] text-white py-4">
          <span className="font-bold mr-7 opacity-25">01</span>
          Pick your destination
        </h5>

        <div className="flex  flex-col lg:gap-20 items-center lg:flex-row lg:justify-around">
          <div className=" flex-1  ">
            <img
              src={destinations[activeTab].images.webp}
              alt={destinations[activeTab].name}
              width="445px"
              height="445px"
              className="object-cover p-8 lg:p-12 "
            />
          </div>

          <div className="flex-1 max-w-[27.8em]">
            <div className="tabs flex justify-around lg:justify-start ">
              {destinations.map(({ name }, id) => {
                return (
                  <Link
                    to="/destination"
                    key={id}
                    className={id === activeTab ? activeTabLink : normalTabLink}
                    // Change the active tab on click.
                    onClick={() => setActiveTab(id)}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <div className=" mt-5 lg:mt-[2.375rem]">
              <h2 className="font-Bellafair uppercase text-center text-white text-[3.5rem] leading-[4.01125rem] lg:text-left  lg:text-[6.25rem] lg:leading-[7.1625rem]">
                {destinations[activeTab].name}
              </h2>

              <p
                className="font-Barlow mt-px mb-8 lg:mt-[0.875rem] lg:mb-[1.625rem]   text-center lg:text-left text-[0.9375rem]
          leading-[1.5625rem] lg:text-lg lg:leading-8 text-[#D0D6f9]"
              >
                {destinations[activeTab].description}
              </p>
              <hr className="  border-[#383B4B]" />
              <div className="flex gap-8 lg:gap-20 flex-col items-center  py-8 lg:flex-row">
                <div className="flex flex-col gap-3   items-center lg:items-start">
                  <h5 className="font-Barlow_C uppercase  text-sm leading-4 tracking-[0.15rem] text-[#D0D6F9]">
                    AVG. DISTANCE
                  </h5>
                  <h6 className="font-Bellafair uppercase  text-[1.75rem] leading-8 text-white ">
                    {destinations[activeTab].distance}
                  </h6>
                </div>

                <div className="flex flex-col gap-3   items-center lg:items-start">
                  <h5 className="font-Barlow_C uppercase text-sm leading-4 tracking-[0.15rem] text-[#D0D6F9]">
                    Est. travel time
                  </h5>
                  <h6 className="font-Bellafair uppercase  text-[1.75rem] leading-8 text-white ">
                    {destinations[activeTab].travel}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Destination;
